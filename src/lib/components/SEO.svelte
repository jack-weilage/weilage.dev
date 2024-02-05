<script lang="ts">
	interface Robots {
		noindex?: boolean
		nofollow?: boolean
		noarchive?: boolean
	}

	export let title: string
	export let description: string

	export let robots: Robots = {}
	export let json_ld: Record<string, unknown> | undefined = undefined

	const robots_string = Object.keys(robots)
		.filter((key) => !!robots[key as keyof Robots])
		.join(', ')
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	{#if robots_string}
		<meta name="robots" content={robots_string} />
	{/if}
	{#if json_ld}
		{@html `<script type="application/ld+json">${JSON.stringify(json_ld)}</` +
			`script>`}
	{/if}
</svelte:head>
