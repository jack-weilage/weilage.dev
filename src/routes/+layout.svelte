<script>
    import '!css/vars.scss'
    import '!css/global.scss'

    import { page } from '$app/stores'
</script>

<!-- Resume shouldn't have the normal header -->
{#if $page.url.pathname !== '/resume/'}
    <header class:no-branding={$page.url.pathname === '/'}>
        <a href="#main-content" class="skip-to-main">Skip To Main Content</a>
        {#if $page.url.pathname !== '/'}
            <a href="/" class="branding">
                <p class="heading">Jack Weilage</p>
                <p class="description">Web Developer and Designer</p>
            </a>
        {/if}
        <nav data-sveltekit-prefetch>
            <!-- <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a> -->
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
        /* 
        TODO: Implement fancy blurred background with CSS vars.
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: saturate(1.5) blur(20px);
        */

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 2rem 2rem 1rem;

        &.no-branding {
            justify-content: flex-end;
        }
        @media (max-width: 500px) {
            padding: 0.5rem 2rem;
            text-align: center;
            justify-content: center;

            a.branding {
                width: 100%;
            }
        }
        .branding {
            &:hover {
                text-decoration: none;
            }
            & p {
                color: var(--color--text);
                margin: 0;
            }
            & .heading {
                /* Make the same as h1 */
                font-family: var(--font--heading);
                font-weight: bold;
                font-size: 38px;
                color: var(--color--text-bold);
            }
            & .description {
                margin-top: 0.25rem;
                opacity: 0.6;
                font-weight: 300;
            }
        }
    }
    .skip-to-main {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;

        padding: 0.75rem;
        
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