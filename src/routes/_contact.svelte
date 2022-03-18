<script>
    import Wrapper from '$lib/components/Wrapper'

    export let type
    export let href
    export let text

    let typeWidth = 0
    let textWidth = 0
</script>

<Wrapper --type="{typeWidth}px" --text="{textWidth}px">
    <div>
        <span bind:clientWidth={typeWidth}>{type}:</span>
        <a {href} bind:clientWidth={textWidth}>{text}</a>
        <div class="underline" />
    </div>
</Wrapper>

<style>
    div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    div.underline {
        width: calc(var(--type) * 1.1);
        height: 0.5px;

        margin: 0.25rem calc(100% - var(--type) * 1.1) 0.25rem 0;
        background-color: #ccc;

        transition: width 0.5s, margin 0.5s;
    }
    div:hover div.underline {
        width: calc(var(--text) * 1.1);
        margin: 0.25rem 0 0.25rem calc(100% - var(--text) * 1.1);
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