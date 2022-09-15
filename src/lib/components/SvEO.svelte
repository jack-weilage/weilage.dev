<script lang="ts">
    /** The title for both the browser and search engines. */
    export let title: string
    /** The description for search engines. */
    export let description: string
    /** The author for search engines. */
    export let author: string | null = null
    /** Keywords for search engines. */
    export let keywords: string[]
    /** The "real"/permanent version of the url. */
    export let canonical = ''

    /** Should search engines not index this page. */
    export let noindex = false
    /** Should search engines not follow links on this page. */
    export let nofollow = false
    /** Should search engines not archive this page. */
    export let noarchive = false
    
    $: robots = [ 
        noindex && 'noindex', 
        nofollow && 'nofollow', 
        noarchive && 'noarchive' 
    ].filter(Boolean)?.join()
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords"    content={keywords?.join()}>
    {#if canonical}<link rel="canonical" href={canonical}>{/if}
    {#if author}   <meta name="author"   content={author}>{/if}
    {#if robots}   <meta name="robots"   content={robots}>{/if}
</svelte:head>