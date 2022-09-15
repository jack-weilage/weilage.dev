<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    import SvEO from '!components/SvEO.svelte'
    import Post from './Post.svelte'
</script>

<SvEO
    title="Blog - Jack Weilage"
    description="A blog run by Jack Weilage, describing web development."
    keywords={[ 'blog', 'jack weilage' ]}
/>

<main id="main-content">
    <h1>Posts</h1>
    <div class="articles">
        {#if data.posts && Object.keys(data.posts).length > 0}
            {#each Object.entries(data.posts) as [slug, meta]}
                <Post {slug} {meta} />
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
        }
    }
</style>
