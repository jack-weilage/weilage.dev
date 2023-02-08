<script lang="ts">
    import { Mail, Github, Phone, MapPin } from 'lucide-svelte'

    import Experience from './Experience.svelte'
    import Link from '!components/Link.svelte'

    import dayjs from 'dayjs'
    import SvEO from '!components/SvEO.svelte'
    import Skill from './Skill.svelte'
</script>

<SvEO
    title="Jack Weilage - Resume"
    description="Read Jack Weilage's resume"
    keywords={[ 'developer', 'jack weilage', 'resume' ]}
/>

<header>
    <div>
        <h1>Jack Weilage</h1>
        <p>Web Developer and Designer</p>
    </div>
    <ul>
        <li>
            <Mail size="1rem" /><Link href="mailto:jack@weilage.dev" title="Email me">jack@weilage.dev</Link>
        </li>
        <li>
            <Github size="1rem" /><Link href="https://github.com/jack-weilage" title="Read my code">@jack-weilage</Link>
        </li>
        <li>
            <Phone size="1rem" /><Link href="tel:+13609279721">360-927-9721</Link>
        </li>
        <li>
            <MapPin size="1rem" />Bellingham, WA
        </li>
    </ul>
</header>
<main>
    <section class="first">
        <div>
            <h2>About Me</h2>
            <ul>
                <li>A web developer with a love for elegant solutions.</li>
                <li>Enthusiastic about new technology, with a respect for the basics.</li>
                <li>Effective communicator who enjoys group problem-solving.</li>
                <li>Self-starter with a deep desire to learn and grow.</li>
            </ul>
            <h2>Education</h2>
            <ul class="education">
                <li><a href="https://bellingham.bellinghamschool.org">Bellingham High School</a>, August 2019 - June 2023.</li>
            </ul>
        </div>
        <div>
            <h2>Skills</h2>
            <div class="skills">
                <Skill items={[ 'SCSS', 'TypeScript', 'HTML' ]}>Languages</Skill>
                <Skill items={[ 'Svelte', 'SvelteKit', 'ViteJS' ]}>Frameworks</Skill>
                <Skill items={[ 'VSCode', 'Git', 'GitHub' ]}>Tools</Skill>
                <Skill items={[ 'Vercel', 'Linux', 'Windows' ]}>Platforms</Skill>
            </div>
        </div>
    </section>
    <section class="second">
        <h2>Experience</h2>
        <Experience start={dayjs('2022-09-01')} end={dayjs('2022-10-14')} skills={[ 'Performance', 'A11Y', 'Presentation', 'Self-Driven' ]}>
            <h3 slot="heading">
                <a href="https://bellinghamschools.org">Bellingham Public Schools</a> - Student
            </h3>
            Through a month of analysis and investigation, created an actionable list of performance, A11Y, and usability concerns for the <a href="https://bellinghamschools.org">Bellingham School District's website</a>.
            Presented this list to the assistant director of Educational Technology in a meeting, receiving high praise.
        </Experience>
        <Experience start={dayjs('2022-09-24')} skills={[ 'Performance', 'Optimization', 'Self-Driven' ]}>
            <h3 slot="heading">
                <a href="https://github.com/jack-weilage/vite-image">vite-image</a> - Sole Developer
            </h3>
            Built a performant, easy-to-use image optimization plugin for <a href="https://vitejs.dev">vitejs</a> named <a href="https://github.com/jack-weilage/vite-image">vite-image</a>. 
            The plugin is fully commented, with local and CI testing, automated Github/NPM releases, comprehensive TypeScript definitions, and compatibility for both CommonJS and ESM modules.
        </Experience>
    </section>
</main>

<style lang="postcss" global>
    body {
        font-size: 1rem;
    }
    header {
        padding: 2rem 2rem 1rem;
        display: grid;
        grid-template-columns: 3.25fr 7fr;
        gap: 2rem;

        align-items: center;

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
            margin: 0;
            list-style: none;

            display: flex;
            flex-wrap: wrap;

            gap: 0.5rem;

            & li {
                border-radius: 0.75rem;
                padding: 0.6rem;
                border: 2px solid var(--color--border);

                flex-grow: 1;
                text-align: center;

                color: var(--color--text-bold);
                font-weight: 600;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;

                & a {
                    color: var(--color--text-bold);
                }
            }
        }
    }
    main {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 1rem;

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }
    section.first {
        display: grid;
        @media (max-width: 900px) {
            grid-template-columns: 1.25fr 1fr;
            gap: 1rem;
        }
        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }

        & ul {
            padding-left: 1.25rem;
        }
    }
    h2 {
        border-bottom: 2px solid var(--color--border);
        padding-bottom: 0.45rem;
    }
    h2 {
        text-align: center;
    }
    section {
        padding: 0 0.5rem;
    }
    div.skills {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }
    ul.education {
        font-style: italic;
    }
</style>