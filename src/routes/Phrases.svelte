<script lang="ts">
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	export let phrases: string[]
	let phrase = Math.floor(phrases.length * Math.random())
	const prev_phrases: number[] = [phrase]

	onMount(() => {
		const interval = setInterval(() => {
			// Psuedo-randomly choose a phrase-
			// we don't want a phrase to appear more often than once every 5 phrases
			do {
				phrase = Math.floor(phrases.length * Math.random())
			} while (prev_phrases.includes(phrase))

			if (prev_phrases.length >= 5) {
				prev_phrases.shift()
			}
			prev_phrases.push(phrase)
		}, 5000)

		return () => clearInterval(interval)
	})
</script>

<div class="grid grid-cols-[1fr] grid-rows-[1fr]">
	{#key phrase}
		<p
			class="col-[1] row-[1] text-center text-lg text-stone-600 dark:text-stone-400"
			in:fly={{ x: -50 }}
			out:fly={{ x: 50 }}
		>
			is {phrases[phrase]}
		</p>
	{/key}
</div>
