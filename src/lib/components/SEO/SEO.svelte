<script lang="ts">
    /** the title for both the browser and search engines */
    export let title: string
    /** the description for search engines */
    export let description: string
    /** the author for search engines */
    export let author: string
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

    const robots = [
        noindex && 'noindex',
        nofollow && 'nofollow',
        noarchive && 'noarchive',
    ].filter(Boolean)
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="author" content={author}>
    <meta name="keywords" content={keywords.join(',')}>
    <link rel="canonical" href={canonical}>
    <meta name="robots" content={robots.join(',')}>

    <meta name="og:title" content={opengraph.title || title}>
    <meta name="og:description" content={opengraph.description || description}>
    <meta name="og:url" content={opengraph.description || canonical}>
    <meta name="og:type" content={opengraph.type || 'website'}>
</svelte:head>