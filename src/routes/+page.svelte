<script context="module" lang="ts">
    import type { SitemapConfig } from '!types'
    export const _sitemap: SitemapConfig = {
        enabled: true,

        changefreq: 'weekly',
        priority: 1,
    }
</script>
<script lang="ts">
    import { Figma, Github, Mail } from 'lucide-svelte'
    import SEO from '!components/SEO.svelte'
</script>

<SEO
    title="Home - Jack Weilage" description="The homepage of Jack Weilage, a web developer and designer."
    json_ld={{
        '@context': 'http://schema.org/',
        '@type': 'Person',
        name: 'Jack Weilage',

        email: 'jack@weilage.dev',
        gender: 'Male',
        image: '/images/pfp.jpg',
        sameAs: [
            'https://github.com/jack-weilage',
            'https://figma.com/@weilage',
        ],
        url: 'https://weilage.dev/',
    }}
/>

<main id="main-content">
    <h1>Jack Weilage</h1>
    <p>Web Developer and Designer</p>
    <ul>
        <li>
            <a
                target="_blank" rel="noopener noreferrer"
                href="mailto:jack@weilage.dev" title="Email me at jack@weilage.dev"
            >
                <Mail aria-hidden="true" size="20px" />
            </a>
        </li>
        <li>
            <a
                target="_blank" rel="noopener noreferrer"
                href="https://github.com/jack-weilage" title="Read my code on GitHub"
            >
                <Github aria-hidden="true" size="20px" />
            </a>
        </li>
        <li>
            <a
                target="_blank" rel="noopener noreferrer"
                href="https://figma.com/@weilage" title="Check out my designs on Figma"
            >
                <Figma aria-hidden="true" size="20px" />
            </a>
        </li>
    </ul>
</main>

<style lang="postcss">
    main :global {
        text-align: center;

        height: 100vh;
        height: 100dvh;

        display: flex;
        justify-content: center;
        flex-direction: column;

        & > h1 {
            margin: 0;

            font-size: clamp(2.25rem, 14vw, 2.75rem);
        }
        & > p {
            margin: 0;

            font-size: clamp(0.75em, 5vw, 1em);
            color: var(--color--text-alt);
        }
        & > ul {
            list-style: none;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 1.35rem;

            margin: 1rem 0 0;
            padding: 0;

            & > li > a {
                display: flex;
                place-items: center;
            }
        }
    }
</style>
