<script lang="ts">
    import Copy from 'carbon-icons-svelte/lib/Copy.svelte'

    export let icon = Copy
    export let to_copy: string

    function on_click()
    {
        console.log('Copying to clipboard:', to_copy)
        navigator.clipboard.writeText(to_copy)
    }
</script>

<div>
    <button type="button" on:click={on_click}>
        <svelte:component this={icon} />
    </button>
</div>

<style lang="scss">
    div {
        display: contents;

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
    }
</style>