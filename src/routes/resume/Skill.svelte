<script lang="ts">
    export let items: string[]
</script>

<div>
    <h3>
        <slot />
    </h3>
    <ul>
        {#each items as item}
            <li>{item}</li>
        {:else}
            <li>N/A</li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    div:nth-child(2n) {
        text-align: right;

        & ul {
            justify-content: end;
        }
    }
    h3 {
        margin: 0 0 0.5rem;
    }
    ul {
        padding: 0;
        margin: 0.5rem 0;
        list-style: none;

        display: flex;
        flex-flow: row wrap;
        gap: 0.25rem;

        & li {
            padding: 0.35rem 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--color--background-alt);

            outline-offset: -2px;
            outline: 2px solid var(--color--background-alt);

            line-height: 1;
        }
    }
</style>