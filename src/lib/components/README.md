<h1 align="center"><pre>$lib/components</pre></h1>

### Description
This folder contains all reusable components used on [weilage.dev](https://weilage.dev).

### Simple Components
| Name  | Description | Attributes | Slots |
| :---  | :---        |    :---   | :---: |
| `GradientText` | Creates a horizontally scrolling background behind the text specified. | N/A | `default` |
| `Link` | Creates an external link with the specified href and text. | `href` | `default` |
| `LoadingIndicator` | Creates a fake loading indicator to scroll across the screen while the page is waiting. | N/A | N/A |
| `SkipToLink` | Creates an offscreen link which moves into view when focused. | `href` | N/A |

### `SvEO`
SvEO populates the `<head>` with SEO related `<meta>` tags.

Example usage:
```html
<SvEO
    title="Example Page"
    description="This is an example page, used to display components."
    keywords={['test', 'example', 'svelte']}
    canonical="https://example.com/examples"
    noindex nofollow noarchive
/>
```
| Attribute | Description | Required |
| --- | --- | :---: |
| `title` | The title of the current page. | **Yes** |
| `description` | The description of the current page. Should be short and descriptive (ha). | **Yes** |
| `author` | The author of the current page. This is no longer used afaik. | **No** |
| `keywords` | Keywords relating to the current page. These must relate to the content of the page. | **Yes** |
| `canonical` | The canonical url of the current page. If there is a more descriptive/human-readable url it should be supplied. | **Yes** |
| `noindex` | Should crawlers not index this page. | **No** |
| `nofollow` | Should crawlers not follow links on this page. | **No** |
| `noarchive` | Should crawlers not archive this page. | **No** |
| `opengraph` | An object containing details for Facebook/Meta related sites. | **No** |
| `opengraph.title` | The title to display on Facebook/Meta related sites. | **No** |
| `opengraph.description` | The description to display on Facebook/Meta related sites. | **No** |
| `opengraph.url` | The url to display on Facebook/Meta related sites, similar to `canonical`. | **No** |
| `opengraph.type` | The type of content on the current page. | **No** |
| continue with twitter | continue with twitter | continue with twitter |