<script>
    import 'normalize.css'
    import '!css/vars.css'
    import '!css/global.css'

    import { LoadingIndicator } from '!components'
    import { navigating, page } from '$app/stores'
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}
{#if $page.url.pathname !== '/' && $page.url.pathname !== '/rewrite/'}
    <header>
        <a href="#main-content" class="skip-to-main">Skip To Main Content</a>
        <nav>
            <a href="/" sveltekit:prefetch>Home</a>
            <!-- <a href="/blog/" sveltekit:prefetch>Blog</a> -->
        </nav>
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

        border-bottom: 1px solid var(--theme-border);
        
        a.skip-to-main {
            position: absolute;
            left: 0;

            margin: 0.5rem;
            padding: 0.5rem;
            
            color: #000;
            background-color: #fff;
            
            border-radius: 0.25rem;
            border: 1px solid #ccc;

            z-index: 999;
            transform: translateX(-200%);

            transition: transform 0.25s ease-in-out;
        }
        a.skip-to-main:focus {
            transform: translateX(0);
        }
        
        nav {
            @include flex;

            a {
                padding: 1rem;
            }
        }
    }
</style>