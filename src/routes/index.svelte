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
    <div class="container">
        <h1 class="greeting">
            <span class="small-greeting">Hello! I'm</span>
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
    <ul class="contact-list">
    {#each Object.values(contacts) as { title, icon, href, username }}
        <li {title}>
            <svelte:component this={icon} size={24} />
            <a {href} rel="external" target="_blank">{username}</a>
        </li>
    {/each}
    </ul>
</footer>

<style lang="scss">
    :root {
        --header-height: 8rem;
        --footer-height: 8rem
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
                /* force style to italic and bold while the font is loading */
                font-family: 'Fira Sans Condensed', sans-serif;
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
                line-height: 1.15;
    
                max-width: 27rem;
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
        main {
            div.container {
                h1.greeting {
                    font-size: 3.5rem;

                    span.small-greeting {
                        font-size: 1.3rem;
                    }
                }

                p.description {
                    max-width: 20rem;
                }
            }
        }

        // footer ul.contact-list {
        //     padding: 0 0.5rem 0.5rem
        // }
    }
</style>