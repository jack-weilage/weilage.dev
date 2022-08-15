<script>
    import 'normalize.css/normalize.css'
    import '$lib/css/vars.css'
    import '$lib/css/global.css'

    import { LoadingIndicator, SkipToLink, Link } from '$lib/components'
    import { navigating } from '$app/stores'
    import { page } from '$app/stores'
    
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}
{#if $page.url.pathname !== '/' && $page.url.pathname !== '/rewrite/'}
    <header>
        <SkipToLink href="#main-content" />
        <Link href="/" icon={false}>Home</Link>
    </header>
{/if}

<slot>
    <main>
        <h1>No Content</h1>
        <p>This page has no content.</p>
    </main>
</slot>

<style lang="scss">
    header {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;

        padding: 1rem;
        border-bottom: 1px solid var(--theme-border);
    }
</style>