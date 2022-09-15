<!-- 
TODO: Fix extremely tall/wide images creating extra space when automatically resizing
 -->
 <script lang="ts">
    export let src: string
    export let srcset: string = ''
    export let alt: string
    
    export let aspect: number

    // vite-imagetools seems to output relative links. That sucks. This will fix it hopefully
    const fix = (str: string) => str.replace(/\.\//g, '/')
</script>

<figure>
    <slot name="image">
        <img src={fix(src)} srcset={fix(srcset)} {alt} style:aspect-ratio={aspect} {...$$restProps}>
    </slot>
    <figcaption>
        <slot />
    </figcaption>
</figure>

<style lang="scss">
    figure {
        width: 100%;

        align-self: center;

        margin: 1rem 0;

        figcaption {
            margin: 0.5rem 0;
            line-height: 1.25;

            font-size: 0.8em;
            filter: opacity(60%);

            padding-left: 0.5rem;
            border-left: 1px solid var(--theme-text);
        }
    }
</style>