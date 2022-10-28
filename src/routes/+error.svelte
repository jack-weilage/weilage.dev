<script lang="ts">
    import SvEO from '!components/SvEO.svelte'
    import { page } from '$app/stores'

    const online = typeof navigator !== 'undefined' ? navigator.onLine : true
</script>

<SvEO
    title="Error {$page.status}"
    description="An error occurred while loading this page."
    robots={{ noindex: true, noarchive: true }}
/>

<main id="main-content">
    {#if online}
        {#if $page.error?.message}
            <h1>{$page.status}: {$page.error.message}</h1>
        {:else}
            <h1>{$page.status}</h1>
        {/if}
        <p>
            If this error is unexpected or seems like my fault, please contact me at 
            <a href="mailto:jack@weilage.dev?subject={encodeURIComponent(`Recurring Error ${$page.status}: ${$page.error?.message ?? 'Unknown'}`)}&body={encodeURIComponent('Description: ')}">jack@weilage.dev</a>
            with a description of how to reliably reproduce the error.
        </p>
        <p class="home">
            <a href="/">Click here to travel back home</a>
        </p>
    {:else}
        <h1>You're currently offline!</h1>
        <p>Wait for an internet connection, then reload this page.</p>
    {/if}
</main>

<style lang="scss">
    main {
        padding: 2rem;
    }
    h1 {
        font-size: 2rem;
        
        margin: 5rem 0 1rem;
        padding-bottom: 0.5rem;
        // margin-bottom: 1rem;
        
        border-bottom: 1px solid var(--color--text-bold);
    }
    p {
        margin-bottom: 0.5rem;

        &.home {
            margin-top: 4rem;
        }
    }
</style>