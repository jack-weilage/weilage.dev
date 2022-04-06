<script>
    import { slide }     from 'svelte/transition'
    import SvEO         from '$lib/components/SvEO'
    import Link         from '$lib/components/Link'

    import Email20      from 'carbon-icons-svelte/lib/Email20'
    import LogoGithub20 from 'carbon-icons-svelte/lib/LogoGithub20'

    import Contact from './_contact.svelte'

    let contactText = 'Contact me'
</script>

<SvEO
    title="Home - Jack Weilage"
    description="Welcome to weilage.dev, a personal website for Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[
        'weilage', 'jack weilage', 'jack weilage dev', 'jack weilage developer',
        'portfolio', 'developer', 'developer portfolio', 'jack weilage portfolio' 
    ]}
    canonical="https://weilage.dev/"
/>
<main id="main-content">
    <div>
        <h2>Hello! I'm</h2>
        <h1>Jack Weilage</h1>
        <p class="description">
            I'm a web developer currently using
            <Link href="https://svelte.dev">Svelte</Link>&nbsp;/&nbsp;<Link href="https://kit.svelte.dev">SvelteKit</Link>,
            <Link href="https://nodejs.org">Node.js</Link> and
            <Link href="https://www.typescriptlang.org">TypeScript</Link>
            to build highly accessible and fully semantic websites.
        </p>
    </div>
    <aside>
        {#key contactText}
            <!-- transitions currently create a memory leak (svelte pls fix) -->
            <p class="contacts" transition:slide={{ delay: 100 }}>{contactText}</p>
        {/key}
        <address
            on:mouseleave={() => contactText = 'Contact me'}
            on:blur={      () => contactText = 'Contact me'}
        >
            <ul>
                <li
                    on:mouseover={() => contactText = 'Email me'}
                    on:focus={    () => contactText = 'Email me'}
                >
                    <Contact>
                        <Email20 slot="icon" />
                        <span slot="type" class="contact-type">Email</span>
                        <a slot="link" class="contact-link" rel="external" target="_blank" title="Email me" href="mailto:jack@weilage.dev">jack@weilage.dev</a>
                    </Contact>
                </li>
                <li 
                    on:mouseover={() => contactText = 'Read my code'}
                    on:focus={    () => contactText = 'Read my code'}
                >
                    <Contact>
                        <LogoGithub20 slot="icon" />
                        <span slot="type" class="contact-type">GitHub</span>
                        <a slot="link" class="contact-link" rel="external" target="_blank" title="Check out my GitHub" href="https://github.com/jack-weilage">jack-weilage</a>
                    </Contact>
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
    aside {
        width: 16.5rem;
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
    p.contacts {
        font-size: 1.2rem;
        font-weight: bold;

        width: 100%;
        text-align: center;

        padding-bottom: 0.05rem;
        margin-bottom: 0.25rem;
        border-bottom: 1px solid #ccc;
    }
    span.contact-type {
        margin-left: 0.25rem;
    }
    a.contact-link:hover {
        text-decoration: none;
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
        p.contacts {
            padding-bottom: 0.5rem;
        }
        ul {
            padding: 0 0.5rem 0.5rem;
        }
    }
</style>