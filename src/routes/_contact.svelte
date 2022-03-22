<script>
    import vars from '$lib/actions/cssVars'

    let typeWidth = 75
    let linkWidth = 75
    
    $: varsList = { type: `${typeWidth}px`, link: `${linkWidth}px` }
</script>

<div class="wrapper">
    <div class="type" bind:clientWidth={typeWidth}>
        <slot name="icon" />
        <slot name="type" />
    </div>
    <div class="link" bind:clientWidth={linkWidth}>
        <slot name="link" />
    </div>

    <div class="underline" use:vars={varsList} />
</div>

<style>
    div.wrapper {
        display: flex;
        flex-flow: row wrap;

        margin-top: 0.35rem;

        overflow: hidden;
    }
    div.underline {
        width: calc(var(--type) + 0.45rem);
        height: 0.5px;

        margin: 0.1rem calc(100% - var(--type) - 0.45rem) 0.1rem 0;
        background-color: #ccc;

        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    div.wrapper:hover div.underline {
        width: calc(var(--link) + 0.45rem);
        margin: 0.1rem 0 0.1rem calc(100% - var(--link) - 0.45rem);
        background-color: var(--theme-anchor);

        /* delay going to right */
        transition-delay: 0.1s;
    }
    div.type {
        margin-right: auto;
    }
    @media(max-width: 600px) {
        div.underline {
            transition-duration: 0.65s;
        }
    }
</style>