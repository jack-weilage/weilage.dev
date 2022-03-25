<script lang="ts">
    import _ from 'lodash'
    /** the title for both the browser and search engines */
    export let title: string
    /** the description for search engines */
    export let description: string
    /** the author for search engines */
    export let author: string | null = null
    /** keywords for search engines */
    export let keywords: string[]
    /** the "real"/permanent version of the url */
    export let canonical: string

    /** should search engines not index this page */
    export let noindex = false
    /** should search engines not follow links on this page */
    export let nofollow = false
    /** should search engines not archive this page */
    export let noarchive = false
    /** robots text */
    $: robots = [ noindex && 'noindex', nofollow && 'nofollow', noarchive && 'noarchive', ].filter(Boolean)

    /** opengraph (for social media) */
    export let opengraph: {
        title?: string
        description?: string
        url?: string
        type?: string
    } | false = {}
    // if opengraph is false, don't output anything
    opengraph = opengraph !== false ? _.defaults(opengraph, { title, description, url: canonical, type: 'website' }) : {}
    
    /** twitter card (for twitter lmao) */
    export let twitter: {
        card?: string
        site?: string
        creator?: string
        description?: string
        title?: string
    } | false = {}
    twitter = twitter !== false ? _.defaults(twitter, { card: 'summary', site: null, creator: null, description, title }) : {}
</script>

<svelte:head>
    <!-- required -->
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords"    content={keywords.join(',')}>
    <link rel="canonical"    href={canonical}>

    <!-- ehhh, not really required, only use if you want -->
    {#if author}<meta name="author" content={author}>          {/if}
    {#if robots}<meta name="robots" content={robots.join(',')}>{/if}

    <!-- useful for social media -->
    {#each Object.entries(opengraph) as [key, value]}
        {#if value}<meta property="og:{key}" content={value}>{/if}
    {/each}

    <!-- twitter card -->
    {#each Object.entries(twitter) as [key, value]}
        {#if value}<meta name="twitter:{key}" content={value}>{/if}
    {/each}
</svelte:head>