<h1 align="center"><pre>$lib/actions</pre></h1>

### Description
This folder contains all reusable Svelte actions used on [weilage.dev](https://weilage.dev).

### `cssVars`
cssVars populates the target element with css vars related to the object passed into it.

Example usage:
```html
<script>
    import { cssVars } from '$lib/components'

    export let width, height

    $: vars = { width, height }
</script>

<div use:cssVars={vars}></div>

<style>
    div {
        width: var(--width);
        height: var(--height);
    }
</style>
```