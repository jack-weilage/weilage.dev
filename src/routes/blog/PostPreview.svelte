<script lang="ts">
    import dayjs from 'dayjs'

    export let post: {
        title: string
        slug: string
        description: string

        read_time: number
        created_at: string
    }
</script>

<article>
    <div class="info">
        <p>{dayjs(post.created_at).format('MMMM D, YYYY ')}</p>
        <p>{post.read_time} minute read</p>
    </div>
    <div class="title">
        <h2>
            <a href="/blog/{post.slug}/">
                {post.title}
            </a>
        </h2>
        <p>{post.description}</p>
    </div>
</article>

<style lang="postcss">
    article {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        gap: 0.5rem;

        &:not(:last-child) {
            margin-bottom: 5rem;
        }
        & p {
            margin: 0;

            font-size: 0.8em;
            color: var(--color--text-alt);
        }
        & > div.info {
            width: 20%;
            min-width: min(8rem, 100%);

            margin-right: auto;
        }
        & > div.title {
            width: 60%;
            min-width: min(20rem, 100%);

            & > h2 {
                margin: 0 0 0.25rem;

                & > a {
                    color: var(--color--text-bold);
                }
            }
        }
    }
</style>
