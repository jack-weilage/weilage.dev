<script lang="ts">
    import Copy from 'carbon-icons-svelte/lib/Copy.svelte'

    export let icon = Copy
    export let to_copy: string

    function on_click()
    {
        navigator.clipboard.writeText(to_copy)
    }
</script>

<button 
    on:click={on_click} 
    type="button" title="Copy to clipboard" 
    {...$$restProps}
>
    <svelte:component this={icon} />
</button>

<style lang="scss">
    button {
        color: var(--theme-anchor);
        background-color: var(--theme-background);

        outline: none;
        border: 2px solid transparent;

        cursor: pointer;

        &:focus {
            border-radius: 0.5rem;
            border: 2px solid var(--theme-text);
        }
    }
</style>