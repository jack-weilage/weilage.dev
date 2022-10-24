<!-- 
TODO: Main title/text should be horizontally centered. Maybe vertical center? How to center around one element?
 -->
<script lang="ts">
    import SvEO from '!components/SvEO.svelte'
    import Link from '!components/Link.svelte'
    import PostPreview from '!components/PostPreview.svelte'

    export let data: import('./$types').PageData


    import Down from 'carbon-icons-svelte/lib/ChevronDown.svelte'

    import Github from 'carbon-icons-svelte/lib/LogoGithub.svelte'
    import Figma  from 'carbon-icons-svelte/lib/LogoFigma.svelte'
    import Email  from 'carbon-icons-svelte/lib/Email.svelte'
</script>

<SvEO
    title="Jack Weilage - Home"
    description="The homepage of Jack Weilage, a web developer and designer."
    author="Jack Weilage"
    keywords={[ 'jack weilage', 'web developer', 'designer' ]}

    ld_json={{
        '@context': 'http://schema.org/',
        '@type': 'Person',
        name: 'Jack Weilage',
        gender: 'Male',
        sameAs: [
            'https://weilage.dev/',
            'https://github.com/jack-weilage',
            'https://figma.com/@weilage'
        ],
        url: 'https://weilage.dev/'
    }}
/>

<main id="main-content">
    <section id="intro">
        <div>
            <h1>Jack Weilage</h1>
            <p>
                I'm a <Link href="https://github.com/jack-weilage">web developer</Link> <span class="spacer-sm" aria-hidden="true" />
                and <Link href="https://figma.com/@weilage">designer</Link>, working <span class="spacer-xl" aria-hidden="true" />to
                improve the web through performant code and accessible designs. Currently, I'm studying computer science and web
                development, with a focus on loading performance, reactive layouts, and mobile compatibility. Outside of programming,
                I love reading and learning more about technology and the world around me!
            </p>
            <ul>
                <li>
                    <Github />
                    <a href="https://github.com/jack-weilage">
                        Read my code!
                    </a>
                </li>
                <li>
                    <Figma />
                    <a href="https://figma.com/@weilage">
                        Check out my designs!
                    </a>
                </li>
                <li>
                    <Email />
                    <a href="mailto:jack@weilage.dev">
                        Contact me!
                    </a>
                </li>
            </ul>
        </div>
        <a href="#posts" class="next-section" title="Move to next section">
            <Down />
        </a>
    </section>
    <section id="posts">
        <header>
            <h2>Recently Posted</h2>
        </header>
        <main>
            {#each data.posts as post}
                <PostPreview {post} />
            {/each}
        </main>
        <footer>
            <a href="/blog/">Browse all posts</a>
        </footer>
    </section>
</main>

<style lang="scss" global>
    @keyframes up-and-down {
        to {
            margin-bottom: -35%;
        }
    }
    a.next-section {
        position: absolute;
        bottom: 1rem;

        line-height: 1;

        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        background-color: var(--color--background-alt);

        display: grid;
        place-items: center;

        // Icon placed right in the middle, half-size
        > svg {
            width: 50%;
            height: 50%;

            animation: up-and-down 1s ease-in-out infinite alternate;
        }
    }
    section {
        padding: 6rem;

        @media (max-width: 800px) {
            padding: 6rem 2rem;
        }
        @media (max-width: 600px) {
            padding: 4rem 1rem;
        }
    }
    section#intro {
        // Attempt to use dvh, but fall back to vh.
        height: 100dvh;
        height: 100vh;

        display: grid;
        place-items: center;

        div {
            width: 75%;
            @media (max-width: 900px) {
                width: 100%;
            }

            h1 {
                margin: 0;
                font-size: 5rem;
                letter-spacing: -2px;
                line-height: 0.8;
            }
            p {
                margin: 0.25em 0 0;

                a {
                    font-weight: bold;
                }
            }
            ul {
                list-style: none;
                padding-left: 1rem;
                margin-bottom: 0;

                li {
                    padding: 0.25rem;
                    font-weight: bold;
                }
            }
            .spacer-xl {
                display: inline-block;
                width: 2.65rem;
            }
            .spacer-sm {
                display: none;
                width: 4.5rem;
            }

            // At 500px, the heading should collapse and a different spacer should be shown to break up different text.
            @media (max-width: 500px) {
                h1 {
                    width: min-content;
                }
                p {
                    margin: 0;
                }
                .spacer-xl {
                    display: none;
                }
                .spacer-sm {
                    display: inline-block;
                }
            }
            // At 335px, the heading should begin to shrink with screen size, making spacers obsolete.
            // The heading should be placed higher so the letters don't overlap.
            @media (max-width: 335px) {
                h1 {
                    font-size: 22vw;
                    margin-bottom: 5vw;
                }
                .spacer-sm {
                    display: none;
                }
            }
        }
    }
    section#posts {
        header {
            text-align: center;
            margin-bottom: 1.5rem;

            h2 {
                font-size: 3rem;
                margin: 0;
            }
        }
        footer a {
            display: block;
            
            font-size: 1.75rem;
            font-weight: bold;

            margin-top: 1rem;
            padding: 1.5rem;

            text-align: center;
        }
    }
</style>