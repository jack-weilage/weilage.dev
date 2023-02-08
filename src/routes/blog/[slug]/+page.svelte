<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData

    let height = 0
    let scroll = 0

    import SvEO from '!components/SvEO.svelte'
    import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte'
    import { fly } from 'svelte/transition'

    import dayjs from 'dayjs'
    const date = dayjs(data.post.date)
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
            <p>
                Published on <time datetime={date.toISOString()}>{date.format('MMMM D, YYYY')}</time>
                •
                {Math.ceil(data.post.wordcount / 200)} minute read
            </p>
        </header>
        <main class="markdown">
            <svelte:component this={data.component} />
        </main>
        <footer>
            {#if scroll > height}
                <a href="#top" class="scroll-to-top" title="Scroll to top" transition:fly={{ y: 15 }}>
                    <ChevronUp width="2rem" height="2rem" aria-hidden="true" />
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

<style lang="postcss" global>
    main#main-content {
        display: grid;
        grid-template-columns: [gutter-left] 0.5fr [main] 3fr [gutter-right] 0.5fr;

        gap: 1rem;
    }
    article {
        grid-column: main;

        & header {
            text-align: center;
    
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid var(--color--border);
    
            & h1 {
                margin: 4rem 1rem 0.5rem;
                
                font-size: 3em;
            }
            & p {
                margin: 0.25rem 0;
                
                font-size: 0.8em;
                opacity: 0.5;
            }
        }
    }
    .markdown {
        padding: 1.5rem 5rem;
        line-height: 1.5;
        
        & h2, & h3, & h4, & h5, & h6 {
            margin: 4rem 0 0.5rem;

            & a.heading-link {
                float: left;
                margin-left: -0.85em;
                padding-right: 0.25em;

                opacity: 0;
                transition: opacity 0.1s ease-in-out;
            }
            &:hover a.heading-link {
                opacity: 1;
                text-decoration: none;
            }
            & + * {
                margin-top: 0;
            }
        }
        & :not(pre) > code {
            white-space: nowrap;

            border-radius: 0.25em;
            padding: 0.1em 0.25em;
            background-color: var(--color--background-alt);
        }
        & ul, & ol {
            & li:not(:last-child) {
                margin-bottom: 0.5rem;
            }
        }
        & pre {
            /* HACK: This really sucks. It doesn't even add padding to the other end of the container! */
            max-width: calc(100vw - (1.5rem * 2));

            display: block;
            border-radius: 0.5rem;
            border: 1px solid var(--color--border);

            background-color: var(--color--background-alt);

            padding: 1rem;
            overflow-x: auto;
        }
        & pre.language-css span.token, & pre.language-scss span.token {
            &.selector {
                color: green;
            }
            &.punctuation {
                color: white;
            }
            &.property {
                color: lightgreen;
            }
        }
        & pre.language-js span.token, & pre.language-ts span.token {
            &.keyword {
                color: red;
            }
            &.string, &.constant {
                color: #3dcfff;
            }
            &.function {
                color: rgb(236, 118, 236);
            }
            &.comment {
                opacity: 0.5;
            }
        }
    }
    footer {
        display: grid;
        grid-auto-flow: column;
        
        gap: 2rem;
        
        padding: 2rem;
        
        & a.scroll-to-top {
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
        & a.pagi {
            padding: 2rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color--border);

            &:hover {
                text-decoration: none;
            }
            & span {
                display: block;
                font-size: 1.5em;
                font-weight: bold;
                color: var(--color--text-bold);
            }
        }
        & a.last {
            text-align: start;
        }
        & a.next {
            text-align: end;
        }
    }
    @media (max-width: 700px) {
        main#main-content {
            grid-template-columns: [main] 1fr;
        }
        .markdown {
            padding: 1rem 1.5rem;
        }
        footer {
            grid-auto-flow: row;
        }
    }
</style>