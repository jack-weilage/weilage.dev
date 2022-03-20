<script>
    import SEO          from '$lib/components/SEO'
    import Link         from '$lib/components/Link'
    import GradientText from '$lib/components/GradientText'

    import Contact from './_contact.svelte'
</script>

<SEO
    title="Home - Jack Weilage"
    description="weilage.dev is a personal website for Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[ 'weilage', 'jack weilage', 'jack weilage dev', 'jack weilage developer', 'portfolio', 'developer', 'developer portfolio', 'jack weilage portfolio' ]}
    canonical="https://weilage.dev/"
/>

<main id="main-content">
    <section>
        <h2>Hello! I'm</h2>
        <h1>Jack&nbsp;Weilage</h1>
        <p class="description">
            I'm a web developer currently using
            <Link href="https://svelte.dev">Svelte</Link>&nbsp;/&nbsp;<Link href="https://kit.svelte.dev">SvelteKit</Link>,
            <Link href="https://nodejs.org">Node.js</Link> and
            <Link href="https://www.typescriptlang.org/">TypeScript</Link>
            to build highly&nbsp;accessible and <GradientText>fully semantic</GradientText> websites.
        </p>
    </section>
    <aside>
        <p class="contact">Contact me</p>
        <address> 
            <ul>
                <li><Contact type="Email"  href="mailto:jack@weilage.dev"         text="jack@weilage.dev" /></li>
                <li><Contact type="GitHub" href="https://github.com/jack-weilage" text="jack-weilage"     /></li>
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
    aside {
        width: 14.5rem;
        line-height: 1.1;

        position: absolute;
        bottom: 0;
        right: 0;

        display: flex;
        flex-flow: column wrap;
        
        margin: 1rem;
    }
    address {
        padding: 0 0.25rem;
    }
    h1 {
        /* force style to italic and bold while the font is loading */
        font-style: italic;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-size: 5rem;

        color: var(--theme-green);

        margin-bottom: 0.5rem;
    }
    h2 {
        font-family: 'Oxygen', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
    }
    p.description {
        line-height: 1.15;

        max-width: 25rem;
    }
    p.contact {
        font-size: 1.2rem;
        font-weight: bold;

        width: 100%;
        text-align: center;

        padding-bottom: 0.05rem;
        margin-bottom: 0.25rem;
        border-bottom: 1px solid #ccc;
    }
    @media (max-width: 600px) {
        aside {
            width: 100%;
            margin: 0;
        }
        h1 {
            font-size: 3.5rem;
        }
        h2 {
            font-size: 1.3rem;
        }
        p.description {
            max-width: 20rem;
        }
        p.contact {
            padding-bottom: 0.5rem;
        }
        ul {
            padding: 0 0.5rem 0.5rem;
        }
    }
</style>