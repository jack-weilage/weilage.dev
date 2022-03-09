<script>
    import { onMount } from 'svelte'
    import { slide, fade } from 'svelte/transition'

    let mounted = false
    let reducedMotion = false
    $: slideReducedMotion = reducedMotion ? fade : slide

    onMount(() => {
        mounted = true
        reducedMotion = window.matchMedia('(prefers-reduced-motion)').matches
    })
</script>
<svelte:head>
    <title>Home - Jack Weilage</title>
</svelte:head>

{#if mounted}
<main id="main-content">
    <section transition:fade={{ duration: 750, delay: 100 }}>
        <h2>Hello! I'm</h2>
        <h1>Jack&nbsp;Weilage</h1>
        <p>
            I'm a web developer currently using
            <a rel="external" target="_blank" href="https://svelte.dev/">Svelte</a>, 
            <a rel="external" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>,
            <a rel="external" target="_blank" href="https://nodejs.org/">Node.js</a> and 
            <a rel="external" target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>.
            I enjoy taking ideas and turning them into reality.
        </p>
    </section>
    <aside transition:slideReducedMotion={{ duration: 500, delay: 750 + 250 + 100 }}>
        <p>Contact me on:</p>
        <address>
            <a href="mailto:jack@weilage.dev">Email (jack@weilage.dev)</a>
        </address>
    </aside>
</main>
{/if}

<style>
    main {
        box-sizing: border-box;

        width: 100%;
        height: 100%;

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;

        padding: 1rem;
    }
    aside {
        line-height: 1.1;

        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }
    h2 {
        font-family: 'Oxygen', sans-serif;
        font-size: 1.8rem;
        font-weight: bold;
    }
    h1 {
        font-family: 'Fira Sans Condensed', sans-serif;
        font-size: 4rem;
        font-weight: bold;

        color: #00B84D;

        margin-bottom: 0.25rem;
    }
    p {
        line-height: 1.1;

        max-width: 25rem;
    }
    @media (max-width: 600px) {
        h2 {
            font-size: 1.5rem;
        }
        h1 {
            font-size: 3rem;
        }
        p {
            max-width: 20rem;
        }
    }
</style>