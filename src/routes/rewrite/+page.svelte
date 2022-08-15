<script lang="ts">

</script>

<main>
    <section>
        <h1>I'm Jack Weilage</h1>
    </section>
    <section>
        <h2>I'm a developer</h2>
        <p>
            Read my code on <a href="https://github.com/jack-weilage">GitHub</a>.
        </p>
    </section>
    <section>
        <h2>I'm a designer</h2>
        <p>
            View design work on <a href="https://figma.com/">Figma</a>.
        </p>
    </section>
    <section>
        <h2>I'm a writer</h2>
        <p>
            Read my rambling <a href="/blog/" rel="external">blog</a>.
        </p>
    </section>
    <section>
        <h2>I'm Jack Weilage</h2>
        <p>
            Contact me via <a href="mailto:jack@weilage.dev">email</a>!
        </p>
    </section>
</main>

<style lang="scss">
    main {
        overflow-y: scroll;
        scroll-snap-type: y mandatory;

        section {
            scroll-snap-align: start;
            
            width: 100%;
            height: 100dvh;
            height: 100vh;
        }
    }
</style>