<script>
    import '$lib/css/reset.css'
    import '$lib/css/global.css'

    import { LoadingIndicator } from '$lib/components'

    import { navigating } from '$app/stores'
    import { onMount } from 'svelte'

    let height
    let mounted = false

    onMount(() => mounted = true)

    // Reactive functions cannot be used in onMount, so we use a flag to indicate that the component is mounted.
    $: if (mounted)
    {
        document.body.style.setProperty('--auto-height', `${height}px`)
    }
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}

<svelte:window bind:innerHeight={height} />

<slot />