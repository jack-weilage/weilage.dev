<script lang="ts" context="module">
    import type { SitemapConfig } from '!types'
    export const _sitemap: SitemapConfig = { enabled: false }
</script>
<script lang="ts">
    import type { PageData } from './$types'

    import { ChevronLeft, ChevronRight } from 'lucide-svelte'
    import SEO from '!components/SEO.svelte'

    export let data: PageData
</script>

<SEO title={data.post.title} description={data.post.description} />

<main id="main-content">
    <h1>{data.post.title}</h1>
    <p>{data.post.description}</p>
    <article>
        {@html data.post.html}
    </article>
    <div>
        <a href="/blog/{data.next?.slug ?? ''}">
            <ChevronLeft />
            <div>
                <p class="title">{data.next?.title ?? 'Blog Homepage'}</p>
                <p class="desc">{data.next?.description ?? 'No newer posts.'}</p>
            </div>
        </a>
        <a href="/blog/{data.last?.slug ?? ''}">
            <div>
                <p class="title">{data.last?.title ?? 'Blog Homepage'}</p>
                <p class="desc">{data.last?.description ?? 'No older posts.'}</p>
            </div>
            <ChevronRight />
        </a>
    </div>
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
            & div.note {
                padding: 1rem;

                border-radius: 0.5rem;
                border: 3px solid var(--color--orange);

                & > *:first-child {
                    margin-top: 0;
                }
                & > *:last-child {
                    margin-bottom: 0;
                }
            }
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
        & > div {
            margin-top: 3rem;

            & > a {
                display: flex;
                align-items: center;
                flex-direction: row;
                gap: 1rem;

                padding: 1.5rem 2rem;

                background-color: var(--color--background-alt);
                border-radius: 0.5rem;

                &:first-child {
                    justify-content: flex-start;
                    margin-bottom: 1rem;
                    text-align: start;
                }
                &:last-child {
                    justify-content: flex-end;
                    text-align: end;
                }
                &:hover {
                    text-decoration: none;
                }
                & > div {
                    & > p {
                        margin: 0;

                        &.title {
                            font-weight: bold;
                        }
                        &.desc {
                            margin-top: 0.25rem;
                            font-size: 0.8rem;
                            color: var(--color--text-alt);
                        }
                    }
                }
            }
        }
    }
</style>
