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

    export let robots: {
        /** Should search engines not index this page. */
        noindex?: boolean
        /** Should search engines not follow links on this page. */ 
        nofollow?: boolean
        /** Should search engines not archive this page. */
        noarchive?: boolean
    } = {}

    $: robots_str = (Object.keys(robots) as (keyof typeof robots)[])
        .filter(key => !!robots[key])
        .join(',')

    /** What ld+json data should be displayed. */
    export let ld_json: object | false = false
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords"    content={keywords?.join()}>
    {#if canonical} <link rel="canonical" href={canonical}>{/if}
    {#if author}    <meta name="author"   content={author}>{/if}
    {#if robots_str}<meta name="robots"   content={robots_str}>{/if}

    {#if ld_json}  
        <script type="application/ld+json">
            {JSON.stringify(ld_json)}
        </script> 
    {/if}
</svelte:head>