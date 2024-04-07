---
title: Why I'm Using Tailwind Now
description:
  I've been anti-Tailwind for years, but I've given in and accepted that utility
  classes are certainly here to stay

uploaded_at: 2024-04-04 17:21
updated_at: 2024-04-05 19:34

published: true
---

In the web space, [TailwindCSS](https://tailwindcss.com) is a name that should
need no introduction. If you've been living in a cave for the past 6 or so years
and haven't heard of it, firstly, congrats on finding an internet connection,
and secondly, Tailwind is an atomic CSS library that allows you to style your
HTML via utility classes. It's designed to speed up development and help make
websites look effortlessly good.

## Why I Wasn't Using Tailwind

Even though it's absurdly popular
([77.8k stars](https://github.com/tailwindlabs/tailwindcss) as of today), I've
held off on using Tailwind for the last 2 years, and have only just recently
implemented on this site. This hesitance has been due to a few major (in my
opinion) concerns:

### Stunts Early Learning

CSS can be complex, and Tailwind makes it easier to understand. This is
_usually_ great, but the simplicity prevents a new learner from understanding
complex concepts (basically anything [Ahmad Shadeed](https://ishadeed.com/)
writes about). While a new learner may not need to understand these concepts to
use Tailwind, they certainly will when they end up working on a project without
it.

Tailwind becomes a crutch, forcing new developers into "Tailwind-only" roles, as
they never learn how to use vanilla CSS. Just like with any language, it's
important to learn the language, not just a library.

### Samey Design

I've read complaints about and have personally noticed the "samey" feel of
websites developed with Tailwind. It's a significant complaint and directly
contradicts one of Tailwind's core tenets: it's so low-level that you can make
just about anything. I'm pretty confident this disconnect between theory and
reality comes down to two main factors:

#### Typographic Scales

Tailwind has a default typographic scale (_typographic scale_: A progression of
font sizes, similar to a musical scale), and so font sizes and ratios are often
the same between different websites. This means that anyone can use a pleasing
ratio between font sizes, and ensures that sizes are consistent between
different pages of the website. Pay attention, however, and you'll notice that
(generally) websites using Tailwind will not change from the default values (I'm
guilty of this as well). Most websites have body text at 16px (`text-base`) and
smaller text will be at 14px (`text-sm`).

It's possible to customize the scale, but it requires (some) design knowledge
and some annoying manual configuration. There really should be a way to
customize the scale itself, not just the specific values of each `text-*` class.
Perhaps a suggestion to make?

#### Color Palettes

Tailwind has a default color palette, with 22 colors in 11 brightness levels.
While this saves time (I've spent more time than I would like to admit
attempting to create a good color palette for this website) and provides a good
default, it makes every website look significantly similar. For example, many
websites use `text-red-600` to signify an error and `text-green-500` for
success.

<!-- TODO: Color the text above -->

---

## Why I Gave In

It took me a while, but I've finally given in. While working on a side project
that I just didn't have the time to write my own CSS for, I tried out Tailwind.
It was great, immediately. I saved time, I made better looking components. Now,
while redesigning my personal website, I decided to rely on Tailwind again.

### Simply Simple

Tailwind makes CSS dead simple. You don't have to think about naming classes,
sorting rules, or choosing values. Tailwind gives opinionated defaults
(mentioned above as a bad thing) that are just restrictive enough to ensure your
design looks pretty good, but loose enough to allow you to create all kinds of
pages and layouts.

Tailwind's class-first design allows the developer to completely forget about
CSS's complex (read: annoying) features like selector specificity. Additionally,
it's basically impossible for your styles to accidentally affect more elements
than you intended. Say you want to adjust the margin of your paragraphs in an
article. With vanilla CSS, you might write something like

```css
article p {
	margin-top: 1rem;
}
```

It's a simple rule, and easy to understand. Somewhere later on, however, you add
a description to your article, contained within a `<p>` element. Suddenly, your
description is being affected by your easy, understandable CSS. Tailwind
entirely removes this class of problem.

```html
<article>
	<p>Description</p>

	<p class="mt-4">
		Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
		sint consectetur cupidatat.
	</p>
	<p class="mt-4">
		Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
		sint consectetur cupidatat.
	</p>
</article>
```

There's no way (that I've found, at least) to affect more elements than you
intend with a rule. Your classes apply to the elements they're placed on, and
nothing else!

### Fantastic CSS Reset

Something I rarely see Tailwind commended on is their reset (what they call
[Preflight](https://tailwindcss.com/docs/preflight)). A CSS reset is a set of
rules designed to "reset" the browser's default styling back to a consistent
baseline. Tailwind's reset goes beyond the typical fixes to browser
inconsistencies and removes margins, unstyles headings and lists, makes images
make sense, and prepares borders for styling. It goes well beyond the typical
reset, but manages to make sense and enforces extremely sane defaults.

An aside: it's really interesting that the default stylesheet for browsers
really hasn't changed since the HTML4 days. It's understandable that browsers
don't want to change the default behavior, as it could break hundreds of
thousands of sites, both new and old, but it's a shame that we're stuck with
whatever some developers in 1997 thought looked good and made sense. That's how
you get whatever kind of terribleness the default form styling is.

### Unopinionated Where It Counts

Many CSS utility libraries implement their own grid and flexbox layouts,
essentially forcing you to work within their self-imposed restrictions. Tailwind
stays out of your way, acting as a set of building blocks, rather than a set of
pre-made components (although Tailwind does sell a
[set of pre-made components](https://tailwindui.com/components) as well). This
alone was enough to convince me to stay after initially setting Tailwind up.

### Tiny, Easy Bundles

I focus on performance and bundle size a lot while developing (some would say
too much), and it's been a reason that I've historically always written my own
CSS. I've looked down upon (and still often do) "plug-and-play" libraries like
[Bootstrap](https://getbootstrap.com/) and [Bulma](https://bulma.io/) both for
their opinionated utilities and for the size of their stylesheets. Unless you
work to tree-shake the rules in those libraries, you'll end up with tens of
kilobytes of unused styling.

Tailwind only includes the classes that you use on that specific page, so the
bundle is always close to as small as possible. You lose a couple bytes here and
there with more rule definitions than hand-written CSS, but you quickly make
that back with compression gains in the markup. The repetitive nature of
Tailwind's classes helps with compression, especially when using
[Prettier](https://prettier.io) with
[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss),
which sorts classes in a deterministic way.

Much like working with a compiler, you technically _can_ manually write smaller,
more efficient code, but using Tailwind saves you _so much_ time. If you're
still worried about bundle size and performance, test the difference! Create a
version of your page with Tailwind and without, then compare the CSS/HTML size.
Don't let unfounded/untested fears prevent you from using such a useful tool.

### Co-location of Code

One of my least favorite parts of writing a vanilla web application (just raw
JavaScript, HTML, and CSS) is how seperate everything is. You place your markup
in one file, then style it in another, then manipulate it in yet another. It's
nearly impossible to visualize how all your code interconnects and interacts.
Modern web frameworks like Vue and Svelte have found a pretty darn good solution
to this: a DSL (Domain Specific Language). They combine all three languages of a
page together into a single file, and allow you to edit them all at once.

Tailwind allows you to take this even further by placing your CSS _into_ the
HTML, co-locating your code even closer together. Tailwind's classes are
specifically placed onto the element that will use them, so there's no possible
confusion as to what's going on and where.

This sort of confusion-elimination is at least part of why new libraries like
HTMX are becoming so popular. By co-locating your code, you immediately
understand where things are and how they relate. As an example, here's two ways
of doing the same thing: creating a flex layout, with items centered
horizontally and vertically.

```html
<!-- index.html -->
<div class="example-box">
	<span>Item 1</span>
	<span>Item 2</span>
	<span>Item 3</span>
</div>
```

```css
/* index.css */
.example-box {
	display: flex;
	align-items: center;
	justify-content: center;
}
```

Notice how separate everything is, and by extension, how fragile. If the CSS
gets removed, the class is renamed, anything at all changes, the whole thing
breaks. The styling and the markup are decoupled. Both should be working
together, yet they're in different places, barely talking to each other.

Now, the same functionality, but with Tailwind instead:

```html
<!-- index.html -->
<div class="flex items-center justify-center">
	<span>Item 1</span>
	<span>Item 2</span>
	<span>Item 3</span>
</div>
```

Everything is together now, it has to be. There's almost no way to break the
connection between the CSS and the HTML, unless you misspell the class or delete
the element. An unexpected benefit is the ease of reading. You know _exactly_
what that `<div>` does, just by looking at it. No need to consult a stylesheet
in another file, it's all here.

These gains keep stacking up as your project grows larger. Keeping your styles
alongside your markup reduces the cognitive load required when opening a new
file, refactoring a component, or attempting to fix a problem.

## Conclusion

This post isn't meant to be an argument for adopting Tailwind everywhere. I've
certainly run into some sharp edges while implementing seemingly simple layouts,
even on this pretty simple website.

For example, every other `<section>` on [my homepage](/) should be a slightly
different color. This is pretty easy to implement:

```html
<main class="[&>section:nth-child(2n)]:bg-zinc-100">
	<!-- snip -->
</main>
```

But what about dark mode? Instead of `bg-zinc-100`, every other `<section>`
should be `bg-zinc-900` if a user has selected dark colors.

```html
<main
	class="[&>section:nth-child(2n)]:bg-zinc-100 [&>section:nth-child(2n)]:dark:bg-zinc-900"
>
	<!-- snip -->
</main>
```

Look at how repetitive it becomes! What if I wanted a border (2 more _long_
classes) and a shadow (2 more _long_ classes)? Of course I could make a
`<Section>` component with an `id` or `count` prop, then add
`bg-zinc-100 dark:bg-zinc-900` if it's a multiple of 2. But that seems to defeat
the purpose of Tailwind, doesn't it? A tiny, easily fixed problem, but still.

In the end, I'm truly surprised at how useful and simple Tailwind has been when
quickly building good-looking sites. Every problem that I thought I would have
was basically immediately swept away, and the few that I did end up encountering
can be mitigated or entirely ignored. I highly recommend at least mocking up a
page or two with Tailwind and comparing the experience to writing vanilla CSS. I
can almost guarantee that you'll find it easier, faster, and less complex.
