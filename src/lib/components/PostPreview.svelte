<script lang="ts">
    import type { PostData } from '!types'

    import dayjs from 'dayjs'

    export let post: PostData
    $: date = dayjs(post.date)

    export let heading = 'h3'
</script>

<article id={post.slug}>
    <aside>
        Uploaded: <time datetime={date.toISOString()}>{date.format('MMMM D, YYYY')}</time>
        <br>
        {Math.ceil(post.wordcount / 200)} minute read
    </aside>
    <div>
        <svelte:element this={heading}>
            <a href="/blog/{post.slug}/">
                {post.title}
            </a>
        </svelte:element>
        <p>{post.description}</p>
    </div>
</article>

<style lang="postcss">
    article {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1.75fr;
        
        padding: 1rem 2rem;

        border-left: 4px solid var(--color--border);

        transition: border-left-color 0.25s ease-in-out;
        &:hover {
            border-left-color: var(--color--anchor);
        }

        &:nth-child(odd) {
            background-color: var(--color--background-alt);
        }
    }
    aside {
        font-size: 0.8em;
        opacity: 0.75;
    }
    div {
        padding: 1rem;
        border-radius: 0.25rem;

        /* Whatever heading shows up. */
        & > *:first-child {
            margin: 0;
            font-size: 1.75rem;
        }
        & p {
            margin-bottom: 0;
        }
    }
    @media (width <= 700px) {
        article {
            grid-template-columns: 1fr;
        }
        div {
            margin-top: 1rem;
            padding: 0;

            & p {
                margin-bottom: 1rem;
            }
        }
    }
    @media (width <= 400px) {
        article {
            text-align: center;
        }
    }
</style>