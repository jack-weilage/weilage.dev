<script>
    import feather from 'feather-icons'

    export let name, width = '16px', height = '16px'
</script>

<!-- TODO: i highly doubt that there would be a way to poison this html code, but it should still be sanitized -->
{#if feather?.icons[name]}
    {@html feather.icons[name].toSvg({ width, height })}
{:else}
    <div style:width style:height />
{/if}