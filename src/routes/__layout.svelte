<script>
    import '$lib/css/reset.css'
    import '$lib/css/global.css'

    import { LoadingIndicator } from '$lib/components'

    import { navigating } from '$app/stores'
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}

<slot />