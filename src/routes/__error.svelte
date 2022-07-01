<!-- 
TODO: Raise an issue with SvelteKit to fix page endpoints for `__error.svelte`
 -->
<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit/types'

    export const load: Load = function ({ status, error })
    {
        console.error(`(${status}): ${error}`)
        
        return { props: { status, error } }
    }
</script>
<script lang="ts">
    import { SvEO, SkipToLink, Link } from '$lib/components'

    export let status: number
    export let error: Error | null

    const online = typeof navigator !== 'undefined' ? navigator.onLine : true
</script>

<SvEO
    title="Error {status}"
    description="An error occurred while loading this page."
    keywords={[]}
    canonical=""
    noindex noarchive
/>

<header>
    <SkipToLink href="#main-content" />
    <Link href="/" icon={false}>Home</Link>
</header>
<main id="main-content">
    {#if online}
        <h1>{status}</h1>
        {#if error?.message}
            <p>{status}: {error.message}</p>
        {:else}
            <p>You found a {status} error!</p>
        {/if}
        {#if import.meta.env.DEV}
            <pre>{error?.stack}</pre>
        {:else}
            <p>If this error persists when it seems like it really shouldn't, please contact me at <a href="mailto:jack@weilage.dev?subject=Recurring Error {status}: {error?.message}">jack@weilage.dev</a> with a description of how to reproduce the error.</p>
        {/if}
    {:else}
        <h1>You're currently offline!</h1>
        <p>Wait for an internet connection, then reload this page.</p>
    {/if}
</main>

<style lang="scss">
    header {
        padding: 1rem;
    }
    main {
        display: flex;
        flex-flow: column wrap;

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