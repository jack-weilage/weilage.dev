---
title: "Unpacking Clever Devices' BusTracker"
description: BusTracker provides an interesting target for analysis and research

uploaded_at: 2024-09-02 11:45
published: true
---

## Background

[Clever Devices](https://www.cleverdevices.com/) is a public transit automation
provider, based in New York. They develop a variety of systems relating to
public bus and rail networks, including a real-time bus tracking software suite
known as BusTime, the target for today. This software can be hosted or run on
premise, providing, among other things, a real-time map of bus/train locations,
and an API exposing that data for developer use.

While developing a map displaying real-time data for various services in my
local area, I ran across this software, used by my local traffic authority, so I
decided to explore what exactly could be found by snooping around publicly
available data.

## Exploration

Before attempting to scrape any data, I needed to find where API endpoints were,
what type of data was returned by them, and how they were possibly secured.
Oftentimes this type of information is publicly available (even if it isn't
supposed to be), so I started looking.

### Documentation

First of all, I wanted some documentation. Unfortunately for me, Clever Devices
doesn't make the documentation for BusTime available publicly on their website,
only providing a
[product fact sheet](https://www.cleverdevices.com/wp-content/uploads/2019/04/Bus-Time-Real-Time-Passenger-Communications-05.01.23.pdf)
(written for sales teams).

Simply searching for _bustime documentation_ on Google got a couple of hits.
Looks like the MTA (the transit authority for New York) has its own custom
system for tracking its vehicles, coincidentally also called "BusTime", so
there's quite a few hits for that. A little ways down the search page, I ran
across a link to a _BusTime® Developer API Version 3 Guide_, hosted by a small
local TA. By changing the version number in the URL (replacing `3_0` with `2_0`
or `1_0`), I could find the documentation for all three currently available
versions of the API! I found a couple more copies of the documentation online,
all hosted by a different TA, but all with the same url:
`/bustime/apidoc/docs/DeveloperAPIGuide3_0.pdf`.

As it turns out, BusTime doesn't just host an API and a map, it hosts its own
documentation! If you can find the subdomain used by a TA to host BusTime, you
can find the exact revision of the software they're using, and the full
documentation for it.

### Client Code

Now that I had the documentation, I wanted to find how TAs interacted with
BusTime's API to create the real-time map. I searched around for keywords like
"BusTime Real-Time" and "BusTime Map" to find a list of ~10 different TAs using
BusTime, and took a look at how the map was implemented in each one.

Notably, there seems to be two different types of map, often both hosted at the
same time.

### Old Map

The first one is almost always hosted at `/bustime/map/displaymap.jsp` and
appears to be older (Example images place it at least as old as 2009) This map
is built with
[Java Server Pages](https://www.oracle.com/java/technologies/jspt.html), using
[jQuery](https://jquery.com/) for the frontend. When viewing the network
requests for this map, I found that it fetches data from JSP files, not from the
BusTime API, leading me to believe that it was developed before the modern
BusTime API was implemented.

JavaScript resources are found at `/bustime/javascript/` and
`/bustime/map/javascript/`. The general (`/bustime/javascript/`) files are
un-minified, showing us comments from Clever Devices developers. At the top of
each file is a copyright notice and a changelog for the file, noting the
developer, date, pull request (always empty), and internal ticket information.

The map (`/bustime/map/javascript/`) files are slightly minified, hiding most
useful comments and only showing changes via comments like `//@8`.

### New Map

The second map is hosted at `/map`, and is what is used in the BusTime app that
TAs can publish. This map seems much more modern, being built with
[Angular](https://angular.dev) and using the BusTime API to fetch data.

JavaScript resources can be found bundled via [Webpack](https://webpack.js.org/)
into multiple files at the root, but `main.__HASH__.js` is the most interesting.
This ~63,000 line long file contains the Angular app, alongside their custom
BusTime API client.

## Scraping and Automation

With both documentation and real-world examples of usage, I could start
attempting to grab data from either of the two maps for use in other
applications.

### Old Map

When first selecting a route to view, the map will make a request like this:

```http
GET /bustime/map/getRoutePoints.jsp?route=BLU&key=0.2806529356346592 HTTP/1.1
```

When attempting to simply fetch this (via `curl`), I immediately got a valid XML
response! No need to do anything special here, just making an HTTP GET request
to the correct endpoint with a couple URL parameters will get you the data you
want.

When checking other similar requests, I noticed that the `key` param keeps
changing for each request. I've very never seen an API key that looks like this
or changes on each request, so I dug into exactly where the code was
constructing these URLs. Extremely quickly, I found this code in
`/bustime/map/javascript/CDAjaxGetAllBuses.js` (similar code exists in other
files):

```js
var url =
	g_requestContextPath +
	'/map/getBusesForRouteAll.jsp' +
	'?key=' +
	Math.random()
```

That's right! The API key is literally a call to `Math.random()`. It isn't even
checked by the server. I tried completely removing `key` from requests, and it
still returns valid responses!

Scraping data from the old map is as easy as identifying the endpoint you want
to access, and sending a GET request to it, no key needed.

### New Map

The new map makes scraping slightly more difficult, even though it returns the
same/similar data as the old map, just in a different format. Section 2 in the
official documentation mentions:

> The “**key**” parameter represents the API key assigned to the developer
> making the request. All requests to the API must be accompanied by a valid API
> key.

Sure enough, making a curl request without a key will return a "No API access
key supplied" error, and entering a bogus key will return a "Invalid API access
key supplied" error. Looks like they implemented proper API authentication!

Unfortunately, this authentication isn't very strong. Grepping for `key=`
immediately returns a hit for a line of code reading:

```js
H += Q + P + '&key=Qskvu4Z5JDwGEVswqdAVkiA5B&format=json'
```

The key isn't `Math.random()` anymore, but it's hard-coded into the bundle! I
searched through the other examples of this codebase I found and in every case,
the key is _exactly_ the same. This key (`Qskvu4Z5JDwGEVswqdAVkiA5B`) appears to
be a global "map" key, which will authenticate you for **every** TA using Clever
Devices BusTime. Neat!

Notably, section 1.5 of the documentation reads:

> 1.5 Is there a limit to the number of requests I can make to the Developer
> API?
>
> > Yes. By default, one API key can make a maximum of 10,000 requests per day.
> > If you believe that you will require more than 10,000 daily requests, you
> > must request that the cap on your key be raised to handle the additional
> > traffic.

This means one of two things is true:

1. A bad actor could make over 10,000 requests in a day to one specific TA's
   map, making it inaccessible for all other users, or, more likely,
1. This key is exempt from this restriction, allowing anyone with it to make an
   unlimited number of requests a day.

Either way, not a great design choice.

_DISCLAIMER: Please don't spam your local TA's website!_

---

Unfortunately, simply knowing the "secret" API key is not enough to avoid the
"No API access permitted" error. The client also sets two non-standard HTTP
headers for each request: `X-Date` and `X-Request-ID`, which are validated by
the server for all requests except `gettime`. Reading through the documentation,
Clever Devices never mentions either of these secret headers, which seems like a
real pain for any TA developers attempting to interface with the API.

An example of these headers is:

```http
X-Date: Sun, 01 Sep 2024 01:41:40 GMT
X-Request-ID: 22ce9958bebe7c1b07a7ac91e998f216bbab98109db42ec1b656bb86c7ea8274
```

`X-Date` is clearly a call to `Date.prototype.toUTCString()`, but with no
information about how `X-Request-ID` is set, I was forced to dive directly into
the code to attempt to understand what was going on here.

Grepping for `X-Request-ID` immediately returned a single result within the
~66,000 lines of code, around 23,000 lines in. The class it's contained in
turned out to be an AngularJS HTTP interceptor, so I cleaned up the code, and
got this:

```ts
@Injectable()
class HeaderInterceptor implements HttpInterceptor {
	constructor(private devAPIService: DevAPIService) {}

	intercept(req: HttpRequest<any>, handler: HttpHandler) {
		let r = req

		if (!this.isGetTimeCall(r)) {
			this.devAPIService.getLocalSynchronizedServerTime().subscribe((date) => {
				const utcString = date.toUTCString()
				r = r.clone({
					headers: r.headers.set('X-Date', utcString),
				})

				const apiEndpoint = this.getApiEndpoint(r)
				const id = this.hashData(apiEndpoint + utcString, 'SHA256')
				r = r.clone({
					headers: r.headers.set('X-Request-ID', id.toString()),
				})
			})
		}

		return handler.handle(r)
	}
	isGetTimeCall(req: HttpRequest<any>) {
		return req.url.includes('/api/v3/gettime')
	}
	getApiEndpoint(req: HttpRequest<any>) {
		const i = req.urlWithParams.indexOf('/api/')
		return req.urlWithParams.substring(i)
	}
	hashData(data: string, hashAlgo: string) {
		const hmacAlgo = CryptoJS['Hmac' + hashAlgo]
		if (hmacAlgo) {
			return hmacAlgo(data, 'ZSqCAFdU7bwxHJUHKYfQUxKin06hMxCK').toString(
				CryptoJS.enc.Hex,
			)
		} else {
			return ''
		}
	}
}
```

If the endpoint isn't `gettime` (the server doesn't check headers on time
requests), the API endpoint (with URL params) is concatenated with the
synchronized server time,

```js
let data =
	'v3/getvehicles?requestType=getvehicles&rt=1&key=Qskvu4Z5JDwGEVswqdAVkiA5B&format=json&xtime=1725154901451' +
	'Sun, 01 Sep 2024 01:41:40 GMT'
```

The result of that concatenation is hashed via `CryptoJS.HmacSHA256` with a
'secret' hard-coded key (always `ZSqCAFdU7bwxHJUHKYfQUxKin06hMxCK`),

```js
let id = CryptoJS.HmacSHA256(data, 'ZSqCAFdU7bwxHJUHKYfQUxKin06hMxCK').toString(
	CryptoJS.enc.Hex,
)
```

Finally, `X-Request-ID` is set to the hash.

```http
X-Request-ID: 0aaea89fdd69e16e4bbcdcb96f4473ce80c5e9d3ca064566f81dc3d8efdb9e7e
```

---

My best guess is that this header pair is meant to be a unique identifier for
each request (like Cloudflare's
[`CF-Ray`](https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-ray)),
although there's some holes in that theory.

If strictly following the API documentation, every request sent within a
specific second to a specific endpoint will have the exact same ID, as
`Date.prototype.toUTCString` is only accurate to the second. The map's
developers seem to have noticed this, as they tack on an undocumented and
seemingly unused `xtime` URL parameter set to the current UNIX timestamp. This
means that there's a _lower_ chance of two requests having the same ID, but if
two requests are sent at the same millisecond, to the same endpoint, they will
have the same ID.

Unfortunately, the server appears to continue accepting an `X-Date` and
`X-Request-ID` pair that is up to _10 minutes old!_ You can keep sending the
exact same request over and over, defeating the purpose of a _unique_
identifier.

The more cynical angle on these headers is that they function as a crude
deterrent to would-be scrapers, who, having found one hard-coded key, assumedly
wouldn't be able to find the second one?

## Conclusion

Scraping information from BusTime's legacy map is easy, and their new API
doesn't seem to be much harder. They've began authenticating API keys (yay!),
but use a single hard-coded one for everything (boo...). They also now validate
two secret headers, never mentioned in documentation (booooooo...), yet neither
of these provide any security either.

In totality, BusTime is an interesting target to scrape, providing useful
documentation and near-real-time data, but they don't seem to have quite gotten
the hang of securing APIs yet.
