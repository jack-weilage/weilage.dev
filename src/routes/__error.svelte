<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: { error, status }
        }
    }
</script>
<script lang="ts">
    export let error: { stack: string, name: string, message: string}, status: number
    const online = typeof navigator !== 'undefined' ? navigator.onLine : true
</script>

<svelte:head>
    <title>Error {status}</title>
</svelte:head>

<main id="main-content">
    <div>
        {#if online}
            <h1>{status}</h1>
            {#if error.message}
                <p>{status}: {error.message}</p>
            {:else}
                <p>You found a {status} error!</p>
            {/if}
            {#if import.meta.env.DEV}
                <pre>{error.stack}</pre>
            {:else}
                <p>If this error persists when it seems like it really shouldn't, please contact me at <a href="mailto:jack@weilage.dev?subject=Recurring Error {status}: {error.message}">jack@weilage.dev</a> with a description of how to reproduce the error.</p>
            {/if}
        {:else}
            <h1>You're currently offline!</h1>
            <p>Wait for an internet connection, then reload this page.</p>
        {/if}
    </div>
</main>

<style>
    main {
        display: flex;
        padding: 2rem;
    }
    div {
        flex-grow: 1;

        padding: 1rem;

        border-radius: 0.25rem;
        border: 1px solid #ccc;

        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.25);
    }
    h1 {
        font-size: 2rem;

        margin-bottom: 1rem;

        border-bottom: 1px solid #ccc;
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
</style>