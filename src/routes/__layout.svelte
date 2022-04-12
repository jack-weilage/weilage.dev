<script>
    import { LoadingIndicator, SkipToLink } from '$lib/components'

    import { navigating } from '$app/stores'
</script>

{#if $navigating}
    <LoadingIndicator />
{/if}

<SkipToLink />
<slot />