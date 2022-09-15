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

    const defaults = <T>(input: object, defaults: T): T => ({ ...defaults, ...input })
    
    /** Opengraph data (for social media). */
    export let opengraph: {
        title?: string
        description?: string
        url?: string
        site_name?: string
        type?: string
    } | false = false
    
    $: if (opengraph)
    {
        // Set Opengraph defaults
        opengraph = defaults(opengraph, { title, description, url: canonical, type: 'website' })
    }
    
    /** Twitter card data. */
    export let twitter: {
        card?: string
        site?: string
        creator?: string
        description?: string
        title?: string
    } | false = false

    $: if (twitter)
    {
        // Set Twitter defaults
        twitter = defaults(twitter, { card: 'summary', description, title })
    }
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords"    content={keywords?.join()}>
    {#if canonical}<link rel="canonical" href={canonical}>{/if}
    {#if author}   <meta name="author"   content={author}>{/if}
    {#if robots}   <meta name="robots"   content={robots}>{/if}

    {#each Object.entries(opengraph) as [key, value]}
        {#if value}<meta property="og:{key}" content={value}>{/if}
    {/each}

    {#each Object.entries(twitter) as [key, value]}
        {#if value}<meta name="twitter:{key}" content={value}>{/if}
    {/each}
</svelte:head>