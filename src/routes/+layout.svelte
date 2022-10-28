<script>
    import '!css/vars.scss'
    import '!css/global.scss'

    import { page } from '$app/stores'
</script>

<!-- Resume shouldn't have the normal header -->
{#if $page.url.pathname !== '/resume/'}
    <header>
        <a href="#main-content" class="skip-to-main">Skip To Main Content</a>
        <div>
            <!-- Homepage shouldn't have heading -->
            {#if $page.url.pathname !== '/'}
                <p class="heading">Jack Weilage</p>
                <p class="description">Web Developer and Designer</p>
            {/if}
        </div>
        <nav data-sveltekit-prefetch>
            <a href="/">Home</a>
            <a href="/blog/">Blog</a>
        </nav>
    </header>
{/if}

<slot>
    <main id="#main-content">
        <h1>No Content</h1>
        <p>This page has no content.</p>
    </main>
</slot>

<style lang="scss">
    header {
        //TODO: Implement fancy blurred background with CSS vars.
        // background-color: rgba(0, 0, 0, 0.6);
        // backdrop-filter: saturate(1.5) blur(20px);

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 2rem;

        @media (max-width: 500px) {
            text-align: center;
            justify-content: center;

            div {
                width: 100%;
            }
        }
        p {
            margin: 0;
        }
        p.heading {
            // Make the same as h1
            font-family: var(--font--heading);
            font-weight: bold;
            font-size: 38px;
            color: var(--color--text-bold);
        }
        p.description {
            margin-top: 0.25rem;
            opacity: 0.6;
            font-weight: 300;
        }
    }
    a.skip-to-main {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;

        padding: 0.75rem;
        
        color: #000;
        background-color: #fff;

        z-index: 999;

        transform: translateY(-200%);
        transition: transform 0.25s ease-in-out;

        &:focus {
            transform: translateY(0);
        }
    }
    nav {
        display: flex;

        > a {
            padding: 1rem;
        }
    }
</style>