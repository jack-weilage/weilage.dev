<script>
    export let title = 'Undefined Title'
</script>

<section>
    <h1>{title}</h1>
    <div>
        <slot />
    </div>
</section>

<style>
    section {
        max-width: 20rem;
        min-height: 80%;
        /* min-height: calc(100vh - 2rem - var(--header-height) - (2 * var(--header-padding))); */

        margin: 1rem;

        border: 1px solid #ccc;
        border-radius: 0.25rem;

        overflow: hidden;
    }
    h1 {
        font-size: 1.25rem;
        font-weight: bold;
        font-style: italic;
        padding: 0.5rem;
        background: #eee;
        border-bottom: 1px solid #ccc;
    }
    div {
        padding: 0.5rem;
    }
</style>