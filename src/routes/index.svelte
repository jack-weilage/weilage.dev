<!-- 
TODO: Remove `div.container` (no longer required for proper spacing, but only if javascript is enabled)
 -->
<script lang="ts">
    import { SvEO, SkipToLink, Link } from '$lib/components'
    
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

    let headingWidth: number | null = null
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
    <div class="container">
        <h1 class="greeting" bind:clientWidth={headingWidth}>
            <span class="small-greeting">Hello! I'm</span>
            <span class="no-wrap">Jack&nbsp;Weilage</span>
        </h1>
        <p class="description" style:--width={headingWidth && `${headingWidth}px`}>
            I'm a web developer currently using
            <span class="no-wrap"><Link href="https://svelte.dev">Svelte</Link> / <Link href="https://kit.svelte.dev">SvelteKit</Link></span>,
            <Link href="https://nodejs.org">Node.js</Link> and <Link href="https://www.typescriptlang.org">TypeScript</Link>
            to build highly accessible and fully semantic websites.
        </p>
    </div>
</main>

<footer>
    <ul class="contact-list">
    {#each Object.values(contacts) as { title, icon, href, username }}
        <li {title}>
            <svelte:component this={icon} size={24} />
            <Link {href} icon={false}>{username}</Link>
        </li>
    {/each}
    </ul>
</footer>

<style lang="scss">
    :root {
        --header-height: 8rem;
        --footer-height: 8rem;
    }
    span.no-wrap {
        white-space: nowrap;
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

        div.container {
            h1.greeting {
                margin: 0;
                
                width: min-content;

                line-height: 1;
                /* force style to italic and bold while the font is loading */
                font-family: 'Fira Sans Condensed', 'Times New Roman', 'Times', sans-serif;
                font-style: italic;
                font-weight: bold;
                font-size: 5.5rem;

                color: var(--theme-green);

                margin-bottom: 0.5rem;

                span.small-greeting {
                    display: block;

                    font-family: 'Libre Franklin', sans-serif;
                    font-style: normal;
                    font-size: 2rem;
                    font-weight: bold;

                    color: var(--theme-text);
                }
            }
            p.description {
                margin: 0;

                max-width: var(--width, 28rem);
            }
        }
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

        ul.contact-list {
            margin: 0;
            padding: 0;

            align-self: flex-end;

            li {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
        
                gap: 0.75rem;
                padding: 0.2rem;
            }
        }
    }

    @media (max-width: 600px) {
        main div.container h1.greeting {
            font-size: 3.5rem;
            span.small-greeting {
                font-size: 1.3rem;
            }
        }
    }
</style>