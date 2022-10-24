<script lang="ts">
    export let data: import('./$types').PageData

    let height = 0
    let scroll = 0

    import SvEO from '!components/SvEO.svelte'
    import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte'
    import { fly } from 'svelte/transition'
</script>

<SvEO 
    title={data.post.title}
    description={data.post.description}
    keywords={[ ...data.post.tags, 'blog' ]}
/>

<svelte:window bind:scrollY={scroll} bind:innerHeight={height} />

<main id="main-content">
    <article id="top">
        <header>
            <h1>{data.post.title}</h1>
            <p class="details">
                Published on <time datetime={data.date.iso}>{data.date.format}</time>
                •
                {Math.ceil(data.post.wordcount / 200)} minute read
            </p>
        </header>
        <main class="post-content">
            <svelte:component this={data.component} />
        </main>
        <footer>
            {#if scroll > height}
                <a href="#top" class="scroll-to-top" title="Scroll to top" transition:fly={{ y: 15 }}>
                    <ChevronUp width="2rem" height="2rem" />
                </a>
            {/if}

            <a href="/blog/{data.last?.slug ?? ''}" class="pagi last">
                <span>Previous post</span>
                {data.last?.title ?? 'No previous post (Go home)'}
            </a>
            <a href="/blog/{data.next?.slug ?? ''}" class="pagi next">
                <span>Next post</span>
                {data.next?.title ?? 'No next post (Go home)'}
            </a>
        </footer>
    </article>
</main>

<style lang="scss">
    @import '../../../lib/css/markdown.scss';

    main#main-content {
        display: grid;
        grid-template-columns: [gutter-left] 0.5fr [main] 3fr [gutter-right] 0.5fr;

        gap: 1rem;

        @media (max-width: 700px) {
            grid-template-columns: [main] 1fr;
        }
    }
    article {
        grid-column: main;
    }
    header {
        text-align: center;

        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--color--border);
    }
    h1 {
        margin: 4rem 1rem 0.5rem;
        
        font-size: 3em;
    }
    p.details {
        margin: 0.25rem 0;
        
        font-size: 0.8em;
        opacity: 0.5;
    }
    .post-content {
        padding: 1.5rem 5rem;
        line-height: 1.5;

        @media (max-width: 700px) {
            padding: 1rem 1.5rem;
        }
    }
    a.scroll-to-top {
        display: grid;
        place-items: center;

        position: fixed;
        bottom: 2rem;
        right: 2rem;

        width: 3rem;
        height: 3rem;

        border-radius: 50%;
        color: var(--color--background);
        background-color: var(--color--text-bold);
    }
    footer {
        display: grid;
        grid-auto-flow: column;

        gap: 2rem;

        padding: 2rem;

        a.pagi {
            padding: 2rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color--border);

            &:hover {
                text-decoration: none;
            }
            span {
                display: block;
                font-size: 1.5em;
                font-weight: bold;
                color: var(--color--text-bold);
            }
        }
        a.next {
            text-align: end;
        }
        @media (max-width: 700px) {
            grid-auto-flow: row;
        }
    }
    
    // Why? Don't ask me...
    .post-content :global {
        @include markdown;
    }
</style>