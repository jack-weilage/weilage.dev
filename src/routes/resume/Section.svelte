<script lang="ts">
	export let title: string
</script>

<section>
	<h2 class="text-center text-2xl font-bold">{title}</h2>
	<div class="flex flex-col gap-y-8">
		<slot />
	</div>
</section>
