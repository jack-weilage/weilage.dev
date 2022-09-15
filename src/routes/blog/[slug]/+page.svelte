<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

    let height = 0
    let scroll = 0

    import SvEO from '!components/SvEO.svelte'
    import ChevronUp from 'carbon-icons-svelte/lib/ChevronUp.svelte'
    import { fly } from 'svelte/transition'
</script>

<SvEO 
    title={data.title}
    description={data.description}
    keywords={[ ...data.tags, 'blog' ]}
/>

<svelte:window bind:scrollY={scroll} />
<main id="main-content" bind:clientHeight={height}>
    <article id="top">
        <header>
            <h1>{data.title}</h1>
            <time datetime={data.date_published.toISO()}>{data.date_published.toFormat('LLLL dd, yyyy')}</time>
        </header>
        <main>
            <svelte:component this={data.component} />
        </main>
        <footer>
            {#if scroll / height > 0.2}
                <a href="#top" class="scroll-to-top" title="Scroll to top" transition:fly={{ y: 15 }}>
                    <ChevronUp width="2rem" height="2rem" />
                </a>
            {/if}
        </footer>
    </article>
</main>

<style lang="scss">
    @import '../../../lib/css/markdown.scss';

    main {
        article {
            margin: 0 15%;
            padding: 0.5rem;

            @media screen and (max-width: 900px) {
                margin: 0;
            }
            header {
                text-align: center;

                padding-bottom: 1rem;
                margin-bottom: 1rem;
                border-bottom: 2px solid var(--theme-border);

                h1 {
                    margin: 4rem 1rem 0.5rem;

                    font-size: 2.5em;
                }
                time {
                    margin: 0.25rem 0;

                    font-size: 0.8em;
                    filter: opacity(50%);
                }
            }
            main {
                @include flex($direction: column);

                padding: 1.5rem 5rem;
                line-height: 1.5;

                @media screen and (max-width: 700px) {
                    padding: 0.5rem 1.5rem;
                }

                :global {
                    @include markdown;
                }
            }
            footer {
                a.scroll-to-top {
                    @include flex($align: center, $justify: center);

                    position: fixed;
                    bottom: 1rem;
                    left: 1rem;

                    width: 3rem;
                    height: 3rem;


                    border-radius: 50%;
                    color: var(--theme-background);
                    background-color: var(--theme-text);
                }
            }
        }
    }
</style>