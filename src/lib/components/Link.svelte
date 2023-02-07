<script lang="ts">
    export let href: string

    export let external = !href.startsWith('/') && !href.startsWith('./') && !href.startsWith('#')
    export let rel = external ? 'noreferrer' : undefined
    export let target = external ? '_blank' : undefined
</script>

<a {href} data-sveltekit-preload-data={external || href.startsWith('#') ? undefined : 'hover'} {rel} {target} {...$$restProps}>
    <slot />
</a>