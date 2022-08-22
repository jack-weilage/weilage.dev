<script>
    import 'normalize.css'
    import '!css/vars.css'
    import '!css/global.css'

    import { LoadingIndicator, SkipToLink, Link } from '!components'
    import { navigating, page } from '$app/stores'
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
    @import '../lib/css/mixins.scss';
    
    header {
        @include flex($wrap: wrap, $align: flex-start);

        padding: 1rem;
        border-bottom: 1px solid var(--theme-border);
    }
</style>