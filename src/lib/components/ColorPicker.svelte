<!-- 
    TODO:
    - Smoothly transition when tapping or dragging fast
 -->
<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte'

    const dispatch = createEventDispatcher()
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
    const hsv2hsl = (h: number, s: number, v: number, l = (200 - s) * v / 100) => ({ h, s: (l === 0 || l === 200) ? 0 : s * v / 100 / (l <= 100 ? l : 200 - l) * 100, l: l * 5 / 10 })

    /** Store data about the saturation and value of the color. */
    let color_data = {
        dragging: false,
        element: null as unknown as HTMLDivElement,
        rect:    null as unknown as DOMRect,
        x: 0, y: 0
    }
    /** Store data about the hue of the color. */
    let hue_data = { 
        dragging: false,
        element: null as unknown as HTMLDivElement,
        rect:    null as unknown as DOMRect,
        y: 0
    }

    /** The color to display when the color picker is opened. */
    export let default_color = { h: 115, s: 90, v: 70 }
    
    // Store color as HSV (easier to work with)
    let h = clamp(default_color.h, 0, 360)
    let s = clamp(default_color.s, 0, 100)
    let v = clamp(default_color.v, 0, 100)
    // Get color as HSL
    $: hsl = hsv2hsl(h, s, v)

    const update_hue = () => {
        if (!hue_data.rect)
            return
        
        h = hue_data.y / hue_data.rect.height * 360
    }
    const update_color = () => {
        if (!color_data.rect)
            return
        
        s = color_data.x / color_data.rect.width * 100
        v = (1 - color_data.y / color_data.rect.height) * 100
    }
    
    /** 
     * Nothing can be dragged if the mouse is up.
     * If something was being dragged, the color must have changed.
     */
    function on_pointerup()
    {
        if (color_data.dragging || hue_data.dragging)
            dispatch('color_changed', hsl)
        
        color_data.dragging = false
        hue_data.dragging   = false
    }
    /** If the mouse is dragging, update the x and y values of the color data. */
    function on_pointermove(event: MouseEvent)
    {
        if (!color_data.element || !hue_data.element)
            return

        if (color_data.dragging)
        {
            const { rect } = color_data as { rect: DOMRect }

            color_data.x = clamp(event.clientX - rect.left, 0, rect.width)
            color_data.y = clamp(event.clientY - rect.top, 0, rect.height)

            update_color()
        }
        if (hue_data.dragging)
        {
            const { rect } = hue_data as { rect: DOMRect }

            hue_data.y = clamp((event.clientY - rect.top), 0, rect.height)
            
            update_hue()
        }

        if (color_data.dragging || hue_data.dragging)
            dispatch('color_changing', hsl)
    }

    /** When the pointer is down, immediately update x and y. */
    function on_pointerdown_color(event: MouseEvent)
    {
        if (!color_data.element || !color_data.rect)
            return

        color_data.dragging = true
        color_data.x = clamp(event.clientX - color_data.rect.left, 0, color_data.rect.width)
        color_data.y = clamp(event.clientY - color_data.rect.top, 0, color_data.rect.height)

        dispatch('color_changing', hsl)
        update_color()
    }
    /** When the pointer is down, immediately update y. */
    function on_pointerdown_hue(event: MouseEvent)
    {
        if (!hue_data.element || !hue_data.rect)
            return

        hue_data.dragging = true
        hue_data.y = clamp(event.clientY - hue_data.rect.top, 0, hue_data.rect.height)

        dispatch('color_changing', hsl)
        update_hue()
    }

    onMount(() => {        
        color_data.rect = color_data.element.getBoundingClientRect()
        color_data.x    = color_data.rect.width * (s / 100)
        color_data.y    = color_data.rect.height * (1 - v / 100)
        
        hue_data.rect   = hue_data.element.getBoundingClientRect()
        hue_data.y      = hue_data.rect.height * (h / 360)
    })
</script>

<svelte:window on:pointermove={on_pointermove} on:pointerup={on_pointerup} />

<div 
    class="container" 
    style:--hue="{hsl.h}deg" 
    style:--sat="{hsl.s}%" 
    style:--light="{hsl.l}%"
>
    <div class="color" on:pointerdown={on_pointerdown_color} bind:this={color_data.element}>
        <div 
            class="color-handle" 
            style:--x="{color_data.x}px" 
            style:--y="{color_data.y}px"
        />
    </div>
    <div class="hue-slider" on:pointerdown={on_pointerdown_hue} bind:this={hue_data.element}>
        <div 
            class="hue-slider-handle" 
            style:--y="{hue_data.y}px"
        />
    </div>
</div>

<style lang="scss">
    div.container {
        --color: hsl(var(--hue, 0deg), 100%, 50%);

        touch-action: none;
        display: flex;
        flex-flow: row nowrap;

        gap: 1rem;

        div.color {
            overflow: hidden;

            width: 20rem;
            aspect-ratio: 1;
            
            border-radius: 1rem;
            background: 
                linear-gradient(to top, hsl(0, 0%, 0%), transparent),
                linear-gradient(to right, hsl(0, 0%, 100%), var(--color));

            &-handle {
                position: relative;

                width: 1rem;
                aspect-ratio: 1 / 1;

                border-radius: 100%;
                background: hsl(var(--hue), var(--sat), var(--light));

                transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%));
                
                &::before {
                    content: '';

                    position: absolute;
                    transform: translate(-2px, -2px);

                    width: 100%;
                    height: 100%;
                    
                    border-radius: 100%;
                    border: 2px solid hsl(var(--hue), var(--sat), var(--light));

                    filter: invert(100%);
                }
            }
        }
        div.hue-slider {
            width: 1rem;
            height: 20rem;

            border-radius: 1rem;

            $gradient: null;
            @for $i from 0 through 8 {
                $gradient: $gradient, hsl($i * 45deg, 100%, 50%);
            }
            background: linear-gradient(to bottom, $gradient);

            &-handle {
                position: relative;

                width: calc(100% + 2px * 2);
                aspect-ratio: 2 / 1;
                border-radius: 1rem;
                
                background: var(--color);

                transform: translate(-2px, calc(var(--y, 0px) - 50%));

                &::before {
                    content: '';

                    position: absolute;
                    transform: translate(-2px, -2px);

                    width: 100%;
                    height: 100%;
                    
                    border-radius: 1rem;
                    border: 2px solid var(--color);

                    filter: invert(100%);
                }
            }
        }
    }
</style>