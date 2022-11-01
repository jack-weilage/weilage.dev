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
    h3 {
        margin: 0 0 0.5rem;
    }
    ul {
        margin: 0;
        padding-left: 2rem;
    }
</style>