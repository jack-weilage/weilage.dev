<script lang="ts" context="module">
    import type { SitemapConfig } from '!types'
    export const _sitemap: SitemapConfig = {
        enabled: true,

        changefreq: 'weekly',
        priority: 0.8,
    }
</script>
<script lang="ts">
    import PostPreview from './PostPreview.svelte'
    import SEO from '!components/SEO.svelte'

    export let data
</script>

<SEO
    title="Blog - Jack Weilage"
    description="A blog run by Jack Weilage, describing web development."
/>

<main id="main-content">
    <div class="heading">
        <h1>Blog</h1>
        <p>Where I write about whatever comes into my mind.</p>
    </div>
    <div class="previews">
        {#each data.posts as post}
            <PostPreview {post} />
        {/each}
    </div>
</main>

<style lang="postcss">
    main :global {
        max-width: 45rem;

        margin: 6rem auto 0;
        padding: 2rem;

        @media print {
            margin: 0;
        }
        & > div.heading {
            margin-bottom: 3rem;

            @media (width <= 650px) {
                text-align: center;
            }
            & > h1 {
                margin: 0 0 0.25rem;

                font-size: 2.5em;
            }
            & > p {
                margin: 0;

                font-size: 0.9em;
                color: var(--color--text-alt);
            }
        }
        & > div.previews {
            display: flex;
            flex-direction: column;

            gap: 1.5rem;
        }
    }
</style>
