<script lang="ts">
    import { Github, Mail } from 'lucide-svelte'
    import Link from '!components/Link.svelte'
</script>

<section class="heading">
    <h1>Jack Weilage</h1>
    <ul>
        <li>
            <Mail aria-hidden="true" size="16px" />
            <Link href="mailto:jack@weilage.dev">jack@weilage.dev</Link>
        </li>
        <li>
            <Github aria-hidden="true" size="16px" />
            <Link href="https://github.com/jack-weilage">@jack-weilage</Link>
        </li>
    </ul>
    <p>
        I am a web developer with a love for elegant, performant solutions. By combining effective
        communication skills and a modern understanding of web standards, I build simple, light, and
        accessible websites.
    </p>
    <picture>
        <source srcset="/images/pfp.webp" type="image/webp">
        <img src="/images/pfp.jpg" alt="">
    </picture>
</section>

<style lang="postcss">
    section {
        display: grid;
        grid-template-areas:
            "title pfp"
            "list  pfp"
            "desc  pfp";
        align-items: center;

        gap: 0.25rem;

        @media (width <= 675px) {
            grid-template-areas:
                "title pfp"
                "list  pfp"
                "desc  desc";
        }
        & > picture {
            grid-area: pfp;

            aspect-ratio: 600 / 641;
            min-width: 8rem;
            max-height: 13.5rem;

            margin-left: 1.75rem;

            @media print {
                width: 10rem;
            }
            & > img {
                border-radius: 1.5rem;
            }
        }
        & h1 {
            grid-area: title;

            margin: 0;
            font-size: 2.5em;
        }
        & ul {
            grid-area: list;
            list-style: none;

            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 1rem;

            margin: 0 0 auto;
            padding: 0;

            @media (width <= 675px) {
                grid-template-columns: 1fr;
            }
            @media print {
                gap: 0.35rem;
            }
            & li {
                display: flex;
                align-items: center;
                gap: 1rem;

                font-size: 0.8em;

                @media print {
                    gap: 0.35rem;
                }
            }
        }
        & > p {
            grid-area: desc;

            margin: 0;
            font-size: 0.85em;

        }
    }
</style>
