<script lang="ts">
    export let title: string, description: string, author: string
    export let keywords: string[]
    export let canonical: string
    export let index = true, follow = true, archive = true

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
        !index && 'noindex',
        !follow && 'nofollow',
        !archive && 'noarchive',
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