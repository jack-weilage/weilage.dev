<script lang="ts">
    export let href: string

    export let external = !href.startsWith('/') && !href.startsWith('./') && !href.startsWith('#')
    // eslint-disable-next-line unicorn/prevent-abbreviations
    export let rel     = external ? 'noopener noreferrer' : undefined
    export let target  = external ? '_blank' : undefined
    export let preload = !external && !href.startsWith('#')
</script>

<a
    {href} data-sveltekit-preload-data={preload ? 'hover' : undefined}
    {rel} {target} {...$$restProps}
>
    <slot />
</a>
