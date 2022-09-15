<script>
    import 'normalize.css'
    import '!css/vars.scss'
    import '!css/global.scss'

</script>

<header>
    <a href="#main-content" class="skip-to-main">Skip To Main Content</a>

    <nav>
        <a href="/" data-sveltekit-prefetch>Home</a>
        <a href="/blog/" data-sveltekit-prefetch>Blog</a>
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
        grid-row: header;
        @include flex($wrap: wrap, $align: flex-start);
        
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
            @include flex;

            > a {
                padding: 1rem;
            }
        }
    }
</style>