<!-- <script lang="ts">
    let text: HTMLInputElement
    let info: HTMLParagraphElement

    let unlocked = false
    const on_submit = () => {
        fetch('/degen-unlock', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: text.value })
        }).then(res => res.json()).then(res => {
            ({ unlocked } = res)
            if (res.unlocked) {
                info.textContent = 'Unlocked!'
            } else {
                info.textContent = 'Incorrect Password'
            }
        })
    }
</script> -->

<svelte:head>
    <title>Home - Jack Weilage</title>
</svelte:head>

<main id="main-content">
    <div class="main">
        <h1>
            Hello! I'm
            <br>
            <span id="name">Jack&nbsp;Weilage</span>
        </h1>
        <p>
            I'm a web developer currently using
            <a rel="external" target="_blank" href="https://svelte.dev/">Svelte</a>, 
            <a rel="external" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>,
            <a rel="external" target="_blank" href="https://nodejs.org/">Node.js</a> and 
            <a rel="external" target="_blank" href="https://www.typescriptlang.org/">TypeScript</a>.
            I enjoy taking ideas and turning them into reality.
        </p>
    </div>
    <!-- <div class="degen">
        {#if unlocked}
            <p>test</p>
        {:else}
            <form on:submit|preventDefault={on_submit}>
                <label for="entry">What website is the "degen website"</label>
                <input bind:this={text} type="text" name="entry" placeholder="enter the url (11 characters)" autocomplete="off" required minlength="11" maxlength="11">
                <input type="submit" placeholder="Submit" required>
                <p bind:this={info}></p>
            </form>
        {/if}
    </div> -->
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        max-height: 100vh;

        overflow-y: auto;
        scroll-snap-type: y proximity;
    }
    div.main {
        box-sizing: border-box;

        display: flex;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        padding: 1rem;

        scroll-snap-align: start;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
    }
    span#name {
        font-size: 3rem;
        color: #00B84D;
    }
    p {
        max-width: 25rem;
    }
    /* div.degen {
        width: 100%;
        min-height: 100vh;

        scroll-snap-align: start;
    } */
</style>