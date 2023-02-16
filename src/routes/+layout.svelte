<script>
    import '!css/vars.pcss'
    import '!css/global.pcss'

    import { page } from '$app/stores'
    // import { browser, dev } from '$app/environment'
    // import { vitals } from '$lib/analytics'

    // $: if (browser && !dev)
    //     vitals({ params: $page.params, url: $page.url })
</script>

<!-- Resume shouldn't have the normal header -->
{#if $page.url.pathname !== '/resume/' && $page.url.pathname !== '/new/' && $page.url.pathname !== '/new/resume/'}
    <header class:no-branding={$page.url.pathname === '/'}>
        <a href="#main-content" class="skip-to-main">Skip To Main Content</a>
        {#if $page.url.pathname !== '/'}
            <a href="/" class="branding">
                <p class="heading">Jack Weilage</p>
                <p class="description">Web Developer and Designer</p>
            </a>
        {/if}
        <nav>
            <a href="/resume/">Resume</a>
            <a href="/blog/" aria-current={$page.url.pathname === '/blog/' ? 'page' : undefined}>Blog</a>
        </nav>
    </header>
{/if}

<slot>
    <main id="#main-content">
        <h1>No Content</h1>
        <p>This page has no content.</p>
    </main>
</slot>

<style lang="postcss">
    header {
        z-index: 9;
        
        position: sticky;
        top: 0;
        
        background-color: var(--color--background-trans);
        backdrop-filter: saturate(1.5) blur(20px);

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 1rem;
        padding: 1rem 2rem;

        @media (max-width: 600px) {
            margin-top: 0;

            text-align: center;
            justify-content: center;

            & a.branding {
                width: 100%;
            }
        }
        &.no-branding {
            justify-content: flex-end;

            margin-top: 2rem;
            padding: 0 2rem;
        }
        & a.branding {
            &:hover {
                text-decoration: none;
            }
            & p.heading {
                margin: 0;

                /* Make the same as h1 */
                font-family: var(--font--heading);
                font-weight: bold;
                font-size: 38px;
                color: var(--color--text-bold);
            }
            & p.description {
                margin: 0.25rem 0 0;
                
                opacity: 0.6;
                font-weight: 300;
                color: var(--color--text);
            }
        }
    }
    a.skip-to-main {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        display: grid;
        place-items: center;

        padding: 1.5rem 0.75rem;
        
        color: var(--color--background);
        background-color: var(--color--text);

        z-index: 999;

        transform: translateY(-200%);
        transition: transform 0.25s ease-in-out;

        &:focus {
            transform: translateY(0);
        }
    }
    nav {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 1rem;

        & a {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;

            &[aria-current="page"] {
                background-color: var(--color--background-alt);
            }
        }
    }
</style>