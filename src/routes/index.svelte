<script lang="ts">
    import { SvEO, SkipToLink } from '$lib/components'
    
    import Email from 'carbon-icons-svelte/lib/Email.svelte'
    import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte'

    //TODO: Use an internal endpoint to fetch a json file with the following data. Maybe dynamically fetch the icons?
    const contacts = {
        email: {
            title: 'Email me',
            icon: Email,
            href: 'mailto:jack@weilage.dev', 
            username: 'jack@weilage.dev'
        },
        github: {
            title: 'Read my code',
            icon: LogoGithub,
            href: 'https://github.com/jack-weilage',
            username: 'jack-weilage'
        }
    }
</script>

<SvEO
    title="Home - Jack Weilage"
    description="Welcome to weilage.dev, a personal website for Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[ 'weilage.dev', 'jack weilage', 'portfolio', 'developer', 'designer' ]}
    canonical="https://weilage.dev/"
/>

<header>
    <SkipToLink href="#main-content" />
</header>

<main id="main-content">
    <div>
        <h1>
            <span>Hello! I'm</span>
            Jack&nbsp;Weilage
        </h1>
        <p class="description">
            I'm a web developer currently using
            <a href="https://svelte.dev" rel="external" target="_blank">Svelte</a>&nbsp;/&nbsp;<a href="https://kit.svelte.dev" rel="external" target="_blank">SvelteKit</a>,
            <a href="https://nodejs.org" rel="external" target="_blank">Node.js</a> and
            <a href="https://www.typescriptlang.org" rel="external" target="_blank">TypeScript</a>
            to build highly accessible and fully semantic websites.
        </p>
    </div>
</main>

<footer>
    <ul class="contacts-list">
    {#each Object.values(contacts) as { title, icon, href, username }}
        <li {title}>
            <svelte:component this={icon} size={24} />
            <a {href} rel="external" target="_blank">{username}</a>
        </li>
    {/each}
    </ul>
</footer>

<style>
    :root {
        --header-height: 6rem;
        --footer-height: 6rem;
    }
    header {
        width: 100%;
        height: var(--header-height);
    }
    main {
        box-sizing: border-box;

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;

        padding: 1rem;
    }
    footer {
        box-sizing: border-box;

        width: 100%;
        height: var(--footer-height);

        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;

        padding: 1rem;
    }
    ul.contacts-list li {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        gap: 0.75rem;
        padding: 0.2rem
    }
    h1 {
        /* force style to italic and bold while the font is loading */
        font-style: italic;
        font-weight: bold;
        font-family: 'Fira Sans Condensed', sans-serif;
        font-size: 5.5rem;

        color: var(--theme-green);

        margin-bottom: 0.5rem;
    }
    h1 span {
        display: block;

        font-style: normal;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 0.03em;

        color: var(--theme-text)
    }
    p.description {
        line-height: 1.15;

        max-width: 27rem;
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 3.5rem;
        }
        h1 span {
            font-size: 1.3rem;
        }
        p.description {
            max-width: 20rem;
        }
        ul {
            padding: 0 0.5rem 0.5rem;
        }
    }
</style>