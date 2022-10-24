<script>
    import '!css/vars.scss'
    import '!css/global.scss'
</script>

<header>
    <a href="#main-content" class="skip-to-main">Skip To Main Content</a>

    <nav data-sveltekit-prefetch>
        <a href="/">Home</a>
        <a href="/blog/">Blog</a>
    </nav>
</header>

<slot>
    <main id="#main-content">
        <h1>No Content</h1>
        <p>This page has no content.</p>
    </main>
</slot>

<style lang="scss">
    header {
        //TODO: Figure out why header sometimes shows below content.
        z-index: 1;
        grid-row: header;

        position: fixed;
        top: 0;
        width: 100%;

        background-color: var(--color--background);
        //TODO: Implement fancy blurred background with CSS vars.
        // background-color: rgba(0, 0, 0, 0.6);
        // backdrop-filter: saturate(1.5) blur(20px);


        display: flex;
        flex-wrap: wrap;
        
        > a.skip-to-main {
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
        
        > nav {
            display: flex;

            > a {
                padding: 1rem;
            }
        }
    }
</style>