<script lang="ts" context="module">
    import type { SitemapConfig } from '!types'
    export const _sitemap: SitemapConfig = {
        enabled: true,

        changefreq: 'weekly',
        priority: 0.8,
    }
</script>
<script lang="ts">
    import type { PageData } from './$types'

    import PostPreview from './PostPreview.svelte'
    import SEO from '!components/SEO.svelte'

    export let data: PageData
</script>

<SEO
    title="Blog - Jack Weilage"
    description="A blog run by Jack Weilage, describing web development."
/>

<main id="main-content">
    <h1>Blog</h1>
    <div>
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

        & > h1 {
            margin-bottom: 3rem;
            font-size: 3em;

            @media (width <= 650px) {
                text-align: center;
            }
        }
    }
</style>
