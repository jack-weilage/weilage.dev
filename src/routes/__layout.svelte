<script>
    import LoadingIndicator from '$lib/components/LoadingIndicator'
    import SkipToLink from '$lib/components/SkipToLink'

    import { navigating } from '$app/stores'
</script>

{#if $navigating}
    <LoadingIndicator />
{/if}

<SkipToLink />
<slot />