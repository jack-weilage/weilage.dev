<script lang="ts" context="module">
    export const hydrate = false
    
    import type { SitemapConfig, ContactsResponse } from '$lib/types'
    export const sitemap: SitemapConfig = { enabled: true, priority: 1, changefreq: 'daily' }
</script>
<script lang="ts">
    import { SvEO, Link } from '$lib/components'

    export let contacts: ContactsResponse
</script>

<SvEO
    title="Home - Jack Weilage"
    description="Welcome to weilage.dev, a personal website for Jack Weilage, a web developer and designer."
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
    $transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.25s;

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

            span.name {
                white-space: nowrap;

                @media screen and (max-width: 600px) {
                    font-size: 15vw;
                }
            }
            span.hello {
                position: absolute;
                
                font-size: 1.5rem;
                font-weight: 200;
                text-transform: none;

                color: var(--theme-text);
                
                transform: translateX(2.5rem);

                transition: transform $transition;

                @media screen and (max-width: 600px) {
                    font-size: 7.5vw;
                    transform: translate(25%, 25%);
                }
            }
            div.line {
                display: inline-block;
                vertical-align: middle;

                border-top: 1px solid var(--theme-border);

                width: 10.5rem;
                margin: 0 1rem;

                transition: 
                    width $transition, 
                    margin $transition;

                @media screen and (max-width: 920px) {
                    display: none;
                }
            }
            &:hover {
                span.hello {
                    transform: 
                        translateX(2rem) 
                        translateY(0.2rem);
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

            @media screen and (max-width: 600px) {
                flex-direction: column;
            }

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

                    @media screen and (max-width: 600px) {
                        display: block;

                        margin: 0.25rem 0;
                    }
                }
            }
        }
    }
</style>