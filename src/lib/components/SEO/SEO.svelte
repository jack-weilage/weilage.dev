<script lang="ts">
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

    /** opengraph (for social media) */
    export let opengraph: {
        title: string
        description: string
        url: string
        type: string
    } = {
        title: '',
        description: '',
        url: '',
        type: 'website'
    }

    $: robots = [
        noindex && 'noindex',
        nofollow && 'nofollow',
        noarchive && 'noarchive',
    ].filter(Boolean)
</script>

<svelte:head>
    <!-- required -->
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords"    content={keywords.join(',')}>
    <link rel="canonical"    href={canonical}>
    <!-- ehhh, not really required, only use if you want -->
    {#if author}       <meta name="author" content={author}>          {/if}
    {#if robots.length}<meta name="robots" content={robots.join(',')}>{/if}
    <!-- useful for social media -->
    <meta name="og:title"       content={opengraph.title || title}>
    <meta name="og:description" content={opengraph.description || description}>
    <meta name="og:url"         content={opengraph.description || canonical}>
    <meta name="og:type"        content={opengraph.type || 'website'}>
</svelte:head>