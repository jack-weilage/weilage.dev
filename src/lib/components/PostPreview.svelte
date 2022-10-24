<script lang="ts">
    import type { PostData } from '!types'
    import dayjs from 'dayjs'

    export let post: PostData
    $: date = dayjs(post.date)
</script>

<article id={post.slug}>
    <p class="time">
        Uploaded: <time datetime={date.toISOString()}>{date.format('MMMM D, YYYY')}</time>
        <br>
        {Math.ceil(post.wordcount / 200)} minute read
    </p>
    <div class="content">
        <h3>
            <a href="/blog/{post.slug}">
                {post.title}
            </a>
        </h3>
        <p>{post.description}</p>
    </div>
</article>

<style lang="scss">
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
    .time {
        font-size: 0.8em;
        opacity: 0.75;
    }
    .content {
        padding: 1rem;
        border-radius: 0.25rem;

        h3 {
            margin: 0;
        }
        p {
            margin-bottom: 0;
        }
    }
    @media (max-width: 700px) {
        article {
            grid-template-columns: 1fr;
        }
        .content {
            margin-top: 1rem;
            padding: 0;

            p {
                margin-bottom: 1rem;
            }
        }
    }
    @media (max-width: 400px) {
        article {
            text-align: center;
        }
    }
</style>