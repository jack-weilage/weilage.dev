<script lang="ts" context="module">
	import type { SitemapConfig } from '$lib/types'
	export const _sitemap: SitemapConfig = {
		enabled: true,

		changefreq: 'monthly',
		priority: 0.4,
	}
</script>

<script lang="ts">
	import { balance } from '$lib/balance'

	import Brain from 'lucide-svelte/icons/brain'
	import Dumbbell from 'lucide-svelte/icons/dumbbell'
	import Github from 'lucide-svelte/icons/github'
	import GraduationCap from 'lucide-svelte/icons/graduation-cap'
	import Mail from 'lucide-svelte/icons/mail'

	import SEO from '$lib/components/SEO.svelte'
	import Experience from './Experience.svelte'
	import Heading from './Heading.svelte'
	import Knowledge from './Knowledge.svelte'
	import Section from './Section.svelte'

	// If this counter is odd, the experience element should be `text-align: end`.
	let id = 0
</script>

<SEO title="Resume - Jack Weilage" description="Read Jack Weilage's resume." />

<main id="main-content">
	<Section heading>
		<Heading>
			<h1 slot="heading">Jack Weilage</h1>
			<ul slot="contact-list">
				<li>
					<Mail aria-hidden="true" size="16px" />
					<a href="mailto:jack@weilage.dev">jack@weilage.dev</a>
				</li>
				<li>
					<Github aria-hidden="true" size="16px" />
					<a href="https://github.com/jack-weilage">@jack-weilage</a>
				</li>
			</ul>
			<p slot="description" use:balance>
				I am a web developer with a love for elegant, performant solutions. By
				combining effective communication skills and a modern understanding of
				web standards, I build simple, light, and accessible websites.
			</p>
			<picture slot="image">
				<source srcset="/images/pfp.webp" type="image/webp" />
				<img src="/images/pfp.jpg" alt="" />
			</picture>
		</Heading>
	</Section>
	<Section>
		<h2 slot="title">
			<Dumbbell />
			Experience
		</h2>
		<Experience id={id++} position="Student" start="2022/9/1" end="2022/10/1">
			<a slot="heading" href="https://bellinghamschools.org">
				Bellingham Public Schools
			</a>

			Through a month of analysis and investigation, created a comprehensive,
			actionable list of concerns for the
			<a href="https://bellinghamschools.org">
				Bellingham School District's websites</a
			>, ranging from A11Y, network performance, and I18N, to HTML correctness,
			unused resources, and inconsistently updated dependencies. Presented this
			list to the assistant director of Educational Technology in a meeting,
			receiving high praise.
		</Experience>
		<Experience id={id++} position="Sole Developer" start="2022/09/24">
			<a slot="heading" href="https://github.com/jack-weilage/vite-image">
				vite-image
			</a>

			Built a performant, easy-to-use image optimization plugin for
			<a href="https://vitejs.dev"> vitejs</a>. The plugin is fully commented,
			with local and CI testing, automated Github/NPM releases, comprehensive
			TypeScript definitions, and compatibility for both CommonJS and ESM
			modules.
		</Experience>
		<Experience id={id++} position="Sole Developer" start="2023/09/15">
			<a slot="heading" href="https://github.com/jack-weilage/chronosis"
				>Chronosis</a
			>

			Created the smallest and fastest date manipulation library: Chronosis.
			Although it's less than 1kb when gzipped, it has just as many features as
			<a href="https://day.js.org">dayjs</a>. Documention can be found at
			<a href="https://chronosis.js.org">chronosis.js.org</a> and via Intellisense.
		</Experience>
	</Section>
	<Section>
		<h2 slot="title">
			<GraduationCap />
			Education
		</h2>
		<Experience id={id++} start="2019/08/01" end="2023/06/01">
			<a slot="heading" href="https://bellingham.bellinghamschools.org">
				Bellingham High School
			</a>

			Used every free moment to study web development and computer science. When
			in-class options were exhausted, self-studied using online resources,
			learning via documentation and constant practice.
		</Experience>
		<Experience id={id++} start="2023/09/19">
			<a slot="heading" href="https://whatcom.edu">Whatcom Community College</a>

			Currently working towards the AAS-T Cybersecurity degree.
		</Experience>
	</Section>
	<Section grid>
		<h2 slot="title">
			<Brain />
			Knowledge
		</h2>
		<Knowledge>
			<span slot="heading">Scripting</span>

			Extremely confident with JavaScript and TypeScript. Experienced in making
			small, modular components.
		</Knowledge>
		<Knowledge>
			<span slot="heading">Styling</span>

			Weaves cutting-edge CSS (via <a href="https://postcss.org">PostCSS</a>)
			with the latest HTML standards to create beautiful, minimal designs.
		</Knowledge>
		<Knowledge>
			<span slot="heading">Markup</span>

			Writes accessible HTML, comfortable with component-based languages like
			React and Svelte.
		</Knowledge>
		<Knowledge>
			<span slot="heading">Platforms</span>

			Comfortable working in Windows and Linux, in both GUI and CLI.
		</Knowledge>
	</Section>
</main>

<style lang="postcss">
	/* TODO: Try to include some scroll snapping. */
	main {
		max-width: 45rem;

		margin: calc(2.5rem + 6vw) auto 2rem;
		padding: 2rem;

		@media print {
			max-width: 100%;

			margin: 0;
			padding: 0;
		}
		& a {
			font-weight: 700;
			color: var(--color--text-bold);
		}
	}
</style>
