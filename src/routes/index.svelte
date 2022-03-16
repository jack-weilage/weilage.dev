<script>
    import SEO from '$lib/components/SEO'
    import GradientText from '$lib/components/GradientText'
</script>

<SEO 
    title="Home - Jack Weilage"
    description="weilage.dev is a personal website for Jack Weilage, a web developer and designer."
    keywords={[ 'weilage', 'jack weilage', 'weilage.dev', 'weilage dev', 'portfolio', 'jack weilage portfolio' ]}
    canonical="https://weilage.dev"
/>

<main id="main-content">
    <section>
        <h2>Hello! I'm</h2>
        <h1>Jack&nbsp;Weilage</h1>
        <p>
            I'm a web developer currently using
            <a rel="external" target="_blank" href="https://svelte.dev/">Svelte</a>&nbsp;/&nbsp;<a rel="external" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>,
            <a rel="external" target="_blank" href="https://nodejs.org/">Node.js</a> and 
            <a rel="external" target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>
            to build highly accessible and <GradientText --fill="linear-gradient(to right, red, orange, #f0f)">fully semantic</GradientText> websites.
        </p>
    </section>
    <aside>
        <h3>Contact me:</h3>
        <address>
            <ul>
                <li>
                    <a href="mailto:jack@weilage.dev">jack@weilage.dev</a>
                </li>
            </ul>
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
    section {
        padding: 1rem;
    }
    aside {
        line-height: 1.1;

        position: absolute;
        bottom: 0;
        right: 0;
        
        margin: 1rem;
    }
    h1 {
        /* force style to italic and bold while the font is loading */
        font-style: italic;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-size: 5rem;

        color: #00B84D;

        margin-bottom: 0.25rem;
    }
    h2 {
        font-family: 'Oxygen', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
    }
    h3 {
        font-size: 1.4rem;
    }
    p {
        line-height: 1.1;

        max-width: 25rem;
    }
    @media (max-width: 600px) {
        h2 {
            font-size: 1.5rem;
        }
        h1 {
            font-size: 3rem;
        }
        p {
            max-width: 20rem;
        }
    }
</style>