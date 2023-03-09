<!-- TODO: Add the prev/next display back. -->
<script lang="ts" context="module">
    import type { SitemapConfig } from '!types'
    export const _sitemap: SitemapConfig = { enabled: false }
</script>
<script lang="ts">
    import type { PageData } from './$types'

    import SEO from '!components/SEO.svelte'

    export let data: PageData
</script>

<SEO title={data.post.title} description={data.post.description} />

<main id="main-content">
    <h1>{data.post.title}</h1>
    <p>{data.post.description}</p>
    <article>
        {@html data.post.content}
    </article>
</main>

<style lang="postcss">
    main :global {
        max-width: 50rem;
        margin: 8rem auto 0;
        padding: 2rem;

        & > h1 {
            margin-bottom: 0;

            font-size: clamp(2.25rem, 8vw, 3.2rem);
        }
        & > p {
            margin: 0.25rem 0 2.5rem;

            font-size: 0.9em;
            color: var(--color--text-alt);
        }

        & > article {
            & pre.shiki {
                width: 100%;

                overflow-x: auto;
                padding: 1rem;
                font-size: 0.75em;

                border-radius: 0.5rem;
            }
            & *:not(pre) > code {
                padding: 0.15rem 0.35rem;
                font-size: 0.8em;
                background-color: var(--color--background-alt);
                border-radius: 0.5rem;
            }
        }
    }
</style>
