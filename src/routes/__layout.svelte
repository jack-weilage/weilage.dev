<!-- 
TODO: Test whether `LoadingIndicator` works.
 -->
<script>
    import 'normalize.css'
    import '$lib/css/vars.css'
    import '$lib/css/global.css'

    import { LoadingIndicator } from '$lib/components'
    import { navigating } from '$app/stores'
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}

<slot>
    <main>
        <h1>No Content</h1>
        <p>This page has no content.</p>
    </main>
</slot>