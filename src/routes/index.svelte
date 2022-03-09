<svelte:head>
    <title>Home - Jack Weilage</title>
</svelte:head>

<main id="main-content">
    <section>
        <h1>
            Hello! I'm<br>
            <span id="name">Jack&nbsp;Weilage</span>
        </h1>
        <p>
            I'm a web developer currently using
            <a rel="external" target="_blank" href="https://svelte.dev/">Svelte</a>, 
            <a rel="external" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>,
            <a rel="external" target="_blank" href="https://nodejs.org/">Node.js</a> and 
            <a rel="external" target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>.
            I enjoy taking ideas and turning them into reality.
        </p>
    </section>
    <aside>
        <p>Contact me on:</p>
        <address>
            <a href="mailto:jack@weilage.dev">Email (jack@weilage.dev)</a>
        </address>
    </aside>
</main>

<style>
    main {
        box-sizing: border-box;

        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;

        padding: 1rem;
    }
    aside {
        line-height: 1.1;

        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: bold;

        margin-bottom: 0.25rem;
    }
    span#name {
        font-size: 3rem;
        color: #00B84D;
    }
    p {
        line-height: 1.1;

        max-width: 25rem;
    }
</style>