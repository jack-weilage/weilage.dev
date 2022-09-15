<script lang="ts">
    import { SvEO, Link } from '!components'
</script>

<SvEO
    title="Jack Weilage - Home"
    description="The homepage of Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[ 'jack weilage', 'web developer', 'designer' ]}
/>
<svelte:head>
    <script type="application/ld+json">
    {
        "@context": "http://schema.org/",
        "@type": "Person",
        "name": "Jack Weilage",
        "gender": "Male",
        "sameAs": [
            "https://weilage.dev/",
            "https://github.com/jack-weilage",
            "https://figma.com/@weilage"
        ],
        "url": "https://weilage.dev/"
    }
    </script>
</svelte:head>

<main id="main-content">
    <div class="content">
        <h1>Jack Weilage</h1>
        <p>
            I'm a <Link href="https://github.com/jack-weilage">web developer</Link> and <Link href="https://figma.com/@weilage">designer</Link>, working to improve the web through performant code and accessible designs.
            As a student, I'm currently building websites with <Link href="https://svelte.dev">Svelte</Link>&nbsp;/&nbsp;<Link href="https://kit.svelte.dev">SvelteKit</Link> and learning modern methods to optimize websites.
            I strongly belive that as the average connection speed increases, the importance of performance and weight reduction only increases.
        </p>
    </div>
</main>

<style lang="scss">
    main {
        grid-row: main;
        
        div.content {
            // Leave a big space on the right for an image later.
            padding: 8rem 20rem 4rem 4rem;
    
            //TODO: Clean up these media queries, too many!
            @media (max-width: 900px) {
                padding-right: 2rem;
            }
            @media (max-width: 800px) {
                padding-left: 2rem;
            }
            @media (max-width: 650px) {
                padding-top: 4rem;
            }

            h1 {
                margin: 0;
                font-size: 5rem;
                font-weight: 700;
                letter-spacing: -2px;

                @media (max-width: 375px) {
                    font-size: 21vw;
                }
            }
            p {
                :global(a) {
                    font-weight: bold;
                }
            }
        }
    }
</style>