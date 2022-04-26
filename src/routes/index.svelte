<script lang="ts">
    import { SvEO, SkipToLink, Link } from '$lib/components'

    import Email24      from 'carbon-icons-svelte/lib/Email24'
    import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub24'

    const contacts = {
        email: {
            title: 'Email me',
            href: 'mailto:jack@weilage.dev',
            username: 'jack@weilage.dev',
            icon: Email24
        },
        github: {
            title: 'Read my code',
            href: 'https://github.com/jack-weilage',
            username: 'jack-weilage',
            icon: LogoGithub24
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
        <h2>Hello! I'm</h2>
        <h1>Jack&nbsp;Weilage</h1>
        <p class="description">
            I'm a web developer currently using
            <Link href="https://svelte.dev">Svelte</Link>&nbsp;/&nbsp;<Link href="https://kit.svelte.dev">SvelteKit</Link>,
            <Link href="https://nodejs.org">Node.js</Link> and
            <Link href="https://www.typescriptlang.org">TypeScript</Link>
            to build highly accessible and fully semantic websites.
        </p>
    </div>
</main>

<footer>
    <ul class="contacts-list">
    {#each Object.values(contacts) as { title, icon, href, username }}
        <li {title}>
            <svelte:component this={icon} />
            <a {href} rel="external" target="_blank">{username}</a>
        </li>
    {/each}
    </ul>
</footer>

<style>
    :root {
        --header-height: 4rem;
        --footer-height: 4rem;
    }
    header {
        width: 100%;
        height: var(--header-height);
    }
    main {
        box-sizing: border-box;

        width: 100%;
        height: calc(100% - var(--header-height) - var(--footer-height));

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;

        padding: 1rem;
    }
    footer {
        width: calc(100% - 1rem * 2);
        height: calc(var(--footer-height) - 2 * 1rem);

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
    @media (max-width: 600px) {
        h1 {
            font-size: 3.5rem;
        }
        h2 {
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