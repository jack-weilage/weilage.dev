<script lang="ts">
    import Globe from 'carbon-icons-svelte/lib/EarthAmericasFilled.svelte'
    import Email from 'carbon-icons-svelte/lib/Email.svelte'
    import Github from 'carbon-icons-svelte/lib/LogoGithub.svelte'
    import Phone from 'carbon-icons-svelte/lib/PhoneFilled.svelte'
    import Location from 'carbon-icons-svelte/lib/LocationFilled.svelte'

    import Experience from './Experience.svelte'
    import Link from '!components/Link.svelte'

    import dayjs from 'dayjs'
    import SvEO from '!components/SvEO.svelte'
    import Skill from './Skill.svelte';
</script>

<SvEO
    title="Jack Weilage - Resume"
    description="Read Jack Weilage's resume"
    keywords={[ 'developer', 'jack weilage', 'resume' ]}
/>

<header>
    <h1>Jack Weilage</h1>
    <p>Web Developer and Designer</p>
    <ul>
        <li>
            <Globe aria-hidden="true" /><Link href="https://weilage.dev" title="View my website">weilage.dev</Link>
        </li>
        <li>
            <Email aria-hidden="true" /><Link href="mailto:jack@weilage.dev" title="Email me">jack@weilage.dev</Link>
        </li>
        <li>
            <Github aria-hidden="true" /><Link href="https://github.com/jack-weilage" title="Read my code">jack-weilage</Link>
        </li>
        <li>
            <Phone aria-hidden="true" /><Link href="tel:+13609279721">+1 (360) 927-9721</Link>
        </li>
        <li>
            <Location aria-hidden="true" />Bellingham, WA
        </li>
    </ul>
</header>
<main>
    <section>
        <h2>Experience</h2>
        <Experience start={dayjs('2022-09-01')} end={dayjs('2022-10-14')} skills={[ 'Performance', 'A11Y', 'Presentation', 'Self-Driven' ]}>
            <h3 slot="heading">
                <a href="https://bellinghamschools.org">Bellingham Public Schools</a> - Student
            </h3>
            As a student, I created an actionable list of performance, A11Y, and usablility concerns for my <a href="https://bellinghamschools.org">school district's website</a>.
            I personally presented this list to the assistant director of Educational Technology, receiving high praise.
        </Experience>
        <Experience start={dayjs('2022-09-24')} skills={[ 'Performance', 'Optimization', 'Self-Driven' ]}>
            <h3 slot="heading">
                <a href="https://github.com/jack-weilage/vite-image">vite-image</a> - Sole Developer
            </h3>
            In my free time, I built a performant, easy-to-use image optimization plugin for <a href="https://vitejs.dev">Vite</a> called <a href="https://github.com/jack-weilage/vite-image">vite-image</a>. 
            The plugin is fully commented, with local and CI testing, automated Github/NPM releases, comprehensive TypeScript definitions, and compatibility for both CommonJS and ESM modules.
        </Experience>
    </section>
    <aside>
        <h2>Skills</h2>
        <div class="skills">
            <Skill items={[ 'SCSS/CSS', 'TypeScript/JavaScript', 'HTML' ]}>Languages</Skill>
            <Skill items={[ 'Svelte/SvelteKit', 'ViteJS' ]}>Frameworks</Skill>
            <Skill items={[ 'VSCode', 'GitHub' ]}>Tools</Skill>
            <Skill items={[ 'Vercel', 'Linux' ]}>Platforms</Skill>
        </div>
    </aside>
</main>

<style lang="postcss" global>
    body {
        display: block;
    }
    header {
        padding: 2rem 2rem 1rem;

        border-bottom: 2px solid var(--color--border);

        & h1 {
            margin: 0;
        }
        & p {
            margin: 0.25rem 0 0;
            opacity: 0.6;
            font-weight: 300;
        }
        & ul {
            padding: 0;
            margin: 3rem 0 0;
            list-style: none;

            display: flex;
            flex-wrap: wrap;

            gap: 1.5rem;

            & li {
                flex-grow: 1;
                text-align: center;

                color: var(--color--text-bold);
                font-weight: 600;

                & a {
                    color: var(--color--text-bold);
                }
                & svg {
                    margin-right: 0.75rem;
                }
            }
        }
    }
    main {
        display: grid;
        grid-template-areas: 
            "exp exp skills";

        @media (max-width: 600px) {
            grid-template-areas: 
                "exp" 
                "skills";
        }
    }
    section, aside {
        padding: 2rem;
    }
    aside div.skills {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (min-width: 500px) and (max-width: 600px) {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>