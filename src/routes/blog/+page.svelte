<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    import { DateTime } from 'luxon'

    import { SvEO } from '!components'
    import { page } from '$app/stores'
</script>

<SvEO
    title="Blog - Jack Weilage"
    description=""
    keywords={[ 'blog', 'jack weilage' ]}
/>

<main id="main-content">
    <h1>Posts</h1>
    <div class="articles">
        {#if data.posts && Object.keys(data.posts).length > 0}
            {#each Object.entries(data.posts) as [slug, { title, description, tags, date_published, date_modified }]}
            {@const url = new URL(slug + '/', $page.url)}
                <article>
                    <h2 class="title"><a href={url.toString()} data-sveltekit-prefetch>{title}</a></h2>
                    <time datetime={date_published}>{DateTime.fromISO(date_published).toFormat('LLLL dd, yyyy')}</time>
                    <p class="description">{description}</p>
                    <ul>
                        {#each tags as tag}
                            <li>{tag}</li>
                        {/each}
                    </ul>
                </article>
            {/each}
        {:else}
            <p>No posts found.</p>
        {/if}
    </div>
</main>

<style lang="scss">
    main {
        padding: 1rem;

        h1 {
            padding-bottom: 0.25rem;
            border-bottom: 2px solid var(--theme-border);

            @media screen and (max-width: 30rem) {
                text-align: center;
            }
        }
        div.articles {
            @include flex($wrap: wrap, $justify: space-evenly, $gap: 2rem);

            article {
                width: 20rem;
                min-width: 15rem;

                @media screen and (max-width: 30rem) {
                    width: 100%;
                }

                h2 {
                    margin: 0 0 0.25rem;
                }

                time {
                    margin: 0;

                    font-size: 0.8em;
                    filter: opacity(50%);
                }

                ul {
                    list-style: none;

                    margin: 0;
                    padding: 0;

                    @include flex($gap: 0.75rem);

                    li {
                        cursor: pointer;

                        padding: 0.25rem 0.5rem;

                        font-size: 0.9em;

                        border: 1px solid var(--theme-border);
                        border-radius: 0.5rem;

                        @include multi-transition((border-color, box-shadow));

                        &:hover {
                            border-color: var(--theme-green);
                            box-shadow: 0 0 0.5rem var(--theme-green);
                        }
                    }
                }
            }
        }
    }
</style>
