<script lang="ts">
    import { Info } from 'lucide-svelte'
</script>

<div>
    <Info size="1.5rem" />
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
        }
        & > p {
            margin: 0;
        }
    }
</style>