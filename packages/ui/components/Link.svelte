<script lang="ts">
	export let href: string

	export let external =
		!href.startsWith('/') && !href.startsWith('./') && !href.startsWith('#')
	export let rel = external ? 'noopener noreferrer' : undefined
	export let target = external ? '_blank' : undefined
</script>

<a {href} {rel} {target} {...$$restProps}>
	<slot />
</a>
