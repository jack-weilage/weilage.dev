<script lang="ts">
    import { page } from '$app/stores'
    import Launch from 'carbon-icons-svelte/lib/Launch.svelte'


    const { origin } = $page.url
    /** An internal or external href. */
    export let href: string
    /** Is this link external? Only use if the automatic detection doesn't work correctly. */
    export let external = new URL(href, origin).origin !== origin
    /** The relation between the href and the current page. Only use if the automatic detection doesn't work correctly. */
    export let rel = external ? 'external noopener noreferrer' : undefined
    /** The target of the link. Only use if the automatic detection doesn't work correctly. */
    export let target = external ? '_blank' : '_self'
    /** Should `data-sveltekit-prefetch` be enabled? */
    export let prefetch = !external

    /** The icon to be displayed after the link. Set to `false` to remove. */
    export let icon: boolean | typeof Launch = Launch
    /** The size (in `px`) of the icon. */
    export let iconSize = 14
</script>

<a {href} {rel} {target} {...$$restProps} data-sveltekit-prefetch={prefetch} data-hasicon={Boolean(icon)}>
    <slot />
    {#if icon}
        <svelte:component this={icon} size={iconSize} aria-hidden="true" />
    {/if}
</a>