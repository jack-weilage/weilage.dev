<script lang="ts">
    import Information from 'carbon-icons-svelte/lib/InformationFilled.svelte'
</script>

<div>
    <Information aria-hidden="true" />
    <p>
        <strong>Note: </strong>
        <slot />
    </p>
</div>

<style lang="postcss">
    div {
        margin: 2rem 0;
        padding: 1rem;

        border-radius: 0.25rem;
        border: 1px solid var(--color--border);
        border-left: 5px solid var(--color--anchor);

        background-color: var(--color--background-alt);


        display: grid;
        grid-template-columns: 3rem 1fr;
        align-items: center;

        & > :global(svg) {
            color: var(--color--anchor);

            width: 1.5rem;
            height: 1.5rem;
        }
        & > p {
            margin: 0;
        }
    }
</style>