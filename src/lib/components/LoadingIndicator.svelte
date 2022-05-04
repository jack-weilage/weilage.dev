<script>
    import { onMount } from 'svelte'
    
    let width = 0
    onMount(() => {
        function update()
        {
            width += 5

            if (width < 80)
            {
                setTimeout(update, 10 * width)
            }
        }
        setTimeout(update, 250)
    })
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