<script>
    //TODO: fix firefox compatibility
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
        width: calc(var(--type, 5rem) + 0.5rem);
        height: 1px;

        margin: 0.1rem calc(100% - var(--type, 5rem) - 0.5rem) 0.1rem 0;
        border-bottom: 1px solid #ccc;

        transition: 
            width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
            margin-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
            margin-left 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    div.wrapper:hover div.underline {
        width: calc(var(--link, 1rem) + 0.5rem);
        margin: 0.1rem 0 0.1rem calc(100% - var(--link, 1rem) - 0.5rem);
        
        border-bottom-color: var(--theme-anchor);
        /* delay going to right */
        transition-delay: 0.1s;
    }
    div.type {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        gap: 0.25rem;

        margin-right: auto;
    }
    @media(max-width: 600px) {
        div.underline {
            transition-duration: 0.65s;
        }
    }
</style>