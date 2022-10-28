<script lang="ts">
    export let data: import('./$types').PageData

    import SvEO from '!components/SvEO.svelte'
    import PostPreview from '!components/PostPreview.svelte'
</script>

<SvEO
    title="Blog - Jack Weilage"
    description="A blog run by Jack Weilage, describing web development."
    keywords={[ 'blog', 'jack weilage' ]}
/>

<main id="main-content">
    <h1>Posts</h1>
    <div class="articles">
        {#each data.posts as post}
            <PostPreview {post} heading="h2" />
        {:else}
            <p>No posts found.</p>
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        padding: 1rem;
    }
    h1 {
        margin: 1rem;
        padding: 0.25rem 1rem;
        border-bottom: 2px solid var(--color--border);

        @media screen and (max-width: 30rem) {
            text-align: center;
        }
    }
</style>
