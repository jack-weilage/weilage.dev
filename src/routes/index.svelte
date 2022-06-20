<script lang="ts" context="module">
    export const prerender = true, hydrate = false
    export const sitemap = { enabled: true }
    
    import type { ContactsResponse } from '$lib/types'
    import type { Load } from '@sveltejs/kit'
    export const load: Load = async ({ fetch }) => {
        const response = await fetch('/api/contacts')
        const contacts: ContactsResponse = response.status === 200 ? await response.json() : {}

        return {
            props: { contacts }
        }
    }
</script>
<script lang="ts">
    import { SvEO, Link } from '$lib/components'
    export let contacts: ContactsResponse
</script>

<SvEO
    title="Home - Jack Weilage"
    description="Welcome to weilage.dev, a personal website for Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[ 'weilage.dev', 'jack weilage', 'portfolio', 'developer', 'designer' ]}
    canonical="https://weilage.dev/"
/>

<main>
    <h1 class="greeting">
        <div class="line" />

        <span class="hello">Hello! I'm </span>
        <span class="name">Jack Weilage</span>
        
        <div class="line" />
    </h1>
    <ul class="contact-list">
        {#each Object.values(contacts) as { href, title, text }}
            <li>
                <Link {href} {title}>{text}</Link>
            </li>
        {/each}
    </ul>
</main>

<style lang="scss">
    :root {
        --heading-hover-transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.25s
    }
    main {
        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;
        
        padding: 1rem;
        h1.greeting {
            margin: 0;
            
            text-align: center;
            vertical-align: middle;
            
            font-size: 4.5rem;
            font-weight: 700;
            font-variant: small-caps;
            text-transform: lowercase;
            font-style: italic;

            color: var(--theme-green);
            span.hello {
                position: absolute;
                
                font-size: 1.5rem;
                font-weight: 200;
                text-transform: none;

                color: var(--theme-text);
                
                transform: translateX(2.5rem);

                transition: transform var(--heading-hover-transition);
            }
            div.line {
                display: inline-block;
                vertical-align: middle;

                border-top: 1px solid var(--theme-border);

                width: 10.5rem;
                margin: 0 1rem;

                transition: width var(--heading-hover-transition), margin var(--heading-hover-transition);
            }
            &:hover {
                span.hello {
                    transform: translateX(2rem) translateY(0.2rem);
                }
                div.line {
                    width: 10rem;
                    margin: 0 -0.25rem;
                }
            }            
        }
        ul.contact-list {
            margin: 0;
            padding: 0;

            display: flex;
            flex-flow: row wrap;
            align-content: center;
            justify-content: center;

            li {
                list-style: none;
                font-size: 1.2rem;

                text-align: center;

                &:not(:last-child)::after {
                    content: '';
                    margin: 0 0.75rem;
        
                    border-top: 0.5px solid var(--theme-border);
                    border-right: 0.5px solid var(--theme-border);
        
                    align-self: stretch;
                }
            }
        }
    }
    @media (max-width: 900px) {
        main h1.greeting {
            div.line {
                display: none;
            }
        }
    }
    @media (max-width: 600px) {
        main {
            h1.greeting {
                span.name {
                    font-size: 3rem;
                }
                span.hello {
                    font-size: 1.6rem;
                    transform: translate(25%, 25%);
                }
            }
            ul.contact-list {
                flex-direction: column;

                & li:not(:last-child)::after {
                    display: block;

                    margin: 0.25rem 0;
                }
            }
        }
    }
</style>