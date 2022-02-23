<script>
    import { fly } from 'svelte/transition'
    const offset = 30
    const tolerance = 3

    let y = 0
    let lastY = 0
    let isShown = true

    $: {
        // if the we're right at the top of the page, we should pin the header
        if (y < offset) isShown = true
        
        const scrolled = lastY - y
        // if we've scrolled fast enough to change the state of the header
        if (Math.abs(scrolled) >= tolerance) {
            // if we're scrolling down, unpin the header
            // if we're scrolling up, pin the header
            isShown = scrolled > 0
        }

        lastY = y
    }
</script>

<svelte:window bind:scrollY={y} />
<div />
{#if isShown}
    <!-- use |local to prevent transition on page change -->
    <header transition:fly|local={{y: -100, delay: 200}}>
        <a href="/" sveltekit:prefetch>weilage</a>
        <ul>
            <li><a href="/about" sveltekit:prefetch>About</a></li>
            <li><a href="/contact" sveltekit:prefetch>Contact</a></li>
            <li><a href="/projects" sveltekit:prefetch>Projects</a></li>
        </ul>
    </header>
{/if}

<style>
    div {
        width: calc(100% - (var(--header-padding) * 2));
        height: var(--header-height);

        padding: var(--header-padding);

        flex-shrink: 0;
    }
    header {
        position: fixed;
        top: 0;
           
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        
        width: calc(100% - (var(--header-padding) * 2));
        height: var(--header-height);

        padding: var(--header-padding);

        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    a {
        margin: 0.5rem;
    }
    ul {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
    }
    li:not(:first-child) {
        margin-left: 0.5rem;
    }
    li {
        margin-right: 0.5rem;
    }
</style>