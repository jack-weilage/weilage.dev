<script lang="ts" context="module">
	import type { SitemapConfig } from '$lib/types'
	export const _sitemap: SitemapConfig = {
		enabled: true,
	}
</script>

<script>
	import Github from 'lucide-svelte/icons/github'
	import Mail from 'lucide-svelte/icons/mail'
	import LinkedIn from 'lucide-svelte/icons/linkedin'

	import Section from './Section.svelte'
	import Experience from './Experience.svelte'
</script>

<main class="mx-auto flex max-w-3xl flex-col gap-y-8 p-4">
	<section class="flex flex-col gap-y-2">
		<h1 class="text-4xl font-bold">Jack Weilage</h1>
		<ul class="flex flex-wrap gap-x-4 gap-y-1 max-md:justify-center">
			<li class="flex gap-x-2">
				<a href="mailto:jack@weilage.dev" class="flex gap-x-2 font-bold">
					<Mail /> jack@weilage.dev
				</a>
			</li>
			<li>
				<a
					href="https://github.com/jack-weilage"
					class="flex gap-x-2 font-bold"
				>
					<Github /> @jack-weilage
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/jack-weilage/"
					class="flex gap-x-2 font-bold"><LinkedIn /> jack-weilage</a
				>
			</li>
		</ul>
		<p>
			I am a web developer with a love for elegant, performant solutions. By
			combining effective communication skills and a modern understanding of web
			standards, I build simple, light, and accessible websites.
		</p>
	</section>
	<Section title="Projects">
		<Experience location="whatcom.live" href="https://whatcom.live">
			<li>
				Built and deployed a website displaying realtime data related to events
				in and around Whatcom County.
			</li>
			<li>
				Identified a need for more comprehensive developer tooling for Mapbox in
				Svelte, and created
				<a
					href="https://github.com/jack-weilage/svelte-mapbox"
					class="font-bold">svelte-mapbox</a
				> as a thin, ergonomic wrapper around mapbox-gl-js.
			</li>
			<li>
				Source code and more details can be found on my GitHub at <a
					href="https://github.com/jack-weilage/whatcom-live"
					class="font-bold">github.com/jack-weilage/whatcom-live</a
				>.
			</li>
		</Experience>
		<Experience location="Chronosis" href="https://chronosis.js.org">
			<li>
				Designed and built the smallest and fastest date manipulation library in
				JavaScript. Chronosis weighs in at under 1kb, while performing almost
				all tasks faster than any other library (even date-fns!).
			</li>
			<li>
				Source code can be found on my GitHub at <a
					href="https://github.com/jack-weilage/chronosis"
					class="font-bold">github.com/jack-weilage/chronosis</a
				>
				and documentation can be found at
				<a href="https://chronosis.js.org" class="font-bold">chronosis.js.org</a
				>.
			</li>
		</Experience>
	</Section>
	<Section title="Education">
		<Experience
			location="Bellingham High School"
			start={new Date('2019/08/01')}
			end={new Date('2023/06/01')}
		>
			<li>
				Attended all computer science and programming courses available.
				Self-studied using online resources, documentation and hands-on practice
				when in-class options were exhausted.
			</li>
			<li>
				Created an actionable list of concerns relating to the Bellimham School
				District's websites through a month of deep analysis and investigation
				as a senior. The list, containing accessibility, performance, and
				internationalization issues, was presented to the CTO and assistant
				director of Educational Technology, recieving high praise.
			</li>
		</Experience>
		<Experience
			location="Whatcom Community College"
			start={new Date('2023/09/19')}
		>
			<li>
				Currently attending classes full-time, working towards an AAS-T
				Cybersecurity degree.
			</li>
			<li>
				Planning to transfer to Western Washington University via the
				Cybersecurity Transfer program.
			</li>
		</Experience>
	</Section>
</main>
