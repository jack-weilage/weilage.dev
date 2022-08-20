<!-- 
TODO: Raise an issue with SvelteKit to fix page endpoints for `__error.svelte`
-->
<script lang="ts">
    import { SvEO, SkipToLink, Link } from '!components'
    import { page } from '$app/stores'

    const online = typeof navigator !== 'undefined' ? navigator.onLine : true
</script>

<SvEO
    title="Error {$page.status}"
    description="An error occurred while loading this page."
    keywords={[]}
    canonical=""
    noindex noarchive
/>

<main id="main-content">
    {#if online}
        <h1>{$page.status}</h1>
        {#if $page.error?.message}
            <p>{$page.status}: {$page.error.message}</p>
        {:else}
            <p>You found a {$page.status} error!</p>
        {/if}
        {#if import.meta.env.DEV}
            <pre>{$page.error?.stack}</pre>
        {:else}
            <p>
                If this error persists when it seems like it really shouldn't, please contact me at 
                <a href="mailto:jack@weilage.dev?subject=Recurring Error {$page.status}: {$page.error?.message}">jack@weilage.dev</a>
                with a description of how to reproduce the error.
            </p>
        {/if}
    {:else}
        <h1>You're currently offline!</h1>
        <p>Wait for an internet connection, then reload this page.</p>
    {/if}
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;

        padding: 2rem;

        h1 {
            font-size: 2rem;
    
            margin-bottom: 1rem;
    
            border-bottom: 1px solid var(--theme-text);
        }
        p {
            margin-bottom: 0.5rem;
        }
        pre {
            font-size: 0.8rem;
            white-space: pre-wrap;
            word-break: break-all;
    
            margin-bottom: 0.5rem;
        }
    }
</style>