<script lang="ts">
    export let title: string, description: string
    export let keywords: string[]
    export let canonical: string
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <meta name="keywords" content={keywords.join(',')}>
    <link rel="canonical" href={canonical}>
</svelte:head>