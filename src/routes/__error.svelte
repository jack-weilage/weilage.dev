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
            <p>If this error persists, try reloading the page.</p>
        {/if}
    {:else}
        <h1>You're currently offline!</h1>
        <p>Wait for an internet connection, then reload this page.</p>
    {/if}
</div>