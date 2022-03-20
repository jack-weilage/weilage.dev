<script>
    import Wrapper from '$lib/components/Wrapper'

    export let type
    export let href
    export let text

    let typeWidth = 10
    let textWidth = 10
</script>

<Wrapper --type="{typeWidth}px" --text="{textWidth}px">
    <div>
        <span bind:clientWidth={typeWidth}>{type}:</span>
        <a rel="external" target="_blank" {href} bind:clientWidth={textWidth}>{text}</a>
        <div class="underline" />
    </div>
</Wrapper>

<style>
    div {
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
    div:hover div.underline {
        width: calc(var(--text) + 0.45rem);
        margin: 0.1rem 0 0.1rem calc(100% - var(--text) - 0.45rem);
        background-color: var(--theme-anchor);

        /* delay going to right */
        transition-delay: 0.1s;
    }
    span {
        display: inline-block;
        margin-right: auto;
    }
    a {
        display: inline-block;
    }
    a:hover {
        text-decoration: none;
    }
</style>