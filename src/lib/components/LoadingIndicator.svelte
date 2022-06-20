<script lang="ts">
    import { onMount } from 'svelte'
    const wait = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

    let width = 0
    async function update()
    {
        // As the width grows, wait for more and more time.
        // Once the width is 80% or more, stop growing.
        while (width < 80)
        {
            width += 5
            await wait(10 * width)
        }
    }
    // Wait for 250ms before displaying the indicator.
    onMount(() => setTimeout(update, 250))
</script>

{#if width > 0}
    <div style:width="{width}%" />
{/if}

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;

        height: 2px;

        background-color: var(--theme-green);

        z-index: 999;

        transition: width 0.5s ease-in-out;
    }
</style>