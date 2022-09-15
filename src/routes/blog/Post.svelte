<script lang="ts">
    import type { Metadata } from '!utils/posts'
    import { DateTime } from 'luxon'

    export let slug: string
    export let meta: Metadata
</script>

<article id={slug}>
    <h2>
        <a href="/blog/{slug}/">{meta.title}</a>
    </h2>
    <time datetime={meta.date_published}>{DateTime.fromISO(meta.date_published).toFormat('LLLL dd, yyyy')}</time>
    <p>{meta.description}</p>
    {#if meta.tags.length}
        <ul>
            {#each meta.tags as tag}
                <li>{tag}</li>
            {/each}
        </ul>
    {/if}
</article>

<style lang="scss">
    article {
        width: 20rem;
        min-width: 15rem;

        @media screen and (max-width: 30rem) {
            width: 100%;
        }

        > h2 {
            margin: 0 0 0.25rem;
        }

        > time {
            margin: 0;

            font-size: 0.8em;
            filter: opacity(50%);
        }

        > ul {
            list-style: none;

            margin: 0;
            padding: 0;

            @include flex($gap: 0.75rem);

            > li {
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
</style>