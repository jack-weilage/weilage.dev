<!-- 
TODO: Decide whether the input should show as valid/invalid when empty.
 -->
<script lang="ts">
    import { forward_events } from '!actions'
    import View from 'carbon-icons-svelte/lib/View.svelte'
    import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte'

    
    /** The type of the input. */
    export let type = 'text'
    /** The id of the input. */
    export let id: string
    /** The name of the input. */
    export let name: string
    /** The placeholder of the input. */
    export let placeholder: string = ' '
    /** The inputs to be forwarded. */
    export let forwarded_events: string[] = []
    /** The message to display when an input is invalid. */
    export let invalid_message = ''

    /** The value of the input. **(BIND ONLY)** */
    export let value = ''


    //HACK: This is a hack to allow binding of an input which has a dynamic type.
    const on_input = ({ target }: Event) => value = (target as HTMLInputElement).value

    let input_hidden = true
</script>

<div>
    <input
        use:forward_events={forwarded_events} on:input|self={on_input}
        type={input_hidden ? type : 'text'} data-type={type} {name} {id} {placeholder}
        {...$$restProps}
    >
    <label class="caption" for={id}>
        <slot></slot>
    </label>
    {#if type === 'password'}
        <button type="button" class="show-hide" title={`${input_hidden ? 'Show' : 'Hide'} password`} on:click={() => input_hidden = !input_hidden}>
            {#if input_hidden}
                <View />
            {:else}
                <ViewOff />
            {/if}
        </button>
    {/if}
    {#if invalid_message}
        <label class="invalid-message" for={id}>{invalid_message}</label>
        <div class="spacer" aria-hidden="true">{invalid_message}</div>
    {/if}
</div>

<style lang="scss">
    div {
        $height: 3rem;
        
        // Align the contents in a column.
        display: flex;
        flex-flow: column nowrap;

        input {
            width: 100%;
            height: $height;

            min-width: 17.5rem;

            background-color: var(--theme-background);
            color: var(--theme-text);

            padding: 0.5rem;

            outline: none;
            border: 2px solid var(--theme-border);
            border-radius: 0.5rem;

            // Hide the "real" placeholder text, as long as the input is not focused.
            // This makes the label a "higher priority", as it will be visible when the input is not focused.
            &:not(:focus)::placeholder {
                color: transparent;
            }
            // If the input is valid, color the border green.
            &:user-valid {
                border-color: var(--theme-green);
            }
            // If the input is invalid, color the border orange.
            &:user-invalid {
                border-color: var(--theme-orange);
            }
            // `user-valid` and `user-invalid` are not supported by most browsers.
            // https://caniuse.com/mdn-css_selectors_user-valid (3.5% support)
            // https://caniuse.com/mdn-css_selectors_user-invalid (3.5% support)
            @supports not selector(:user-valid, :user-invalid) {
                &:valid {
                    border-color: var(--theme-green);
                }
                &:invalid {
                    border-color: var(--theme-orange);
                }
            }
        }
        // Create a button to show/hide the password.
        button.show-hide {
            cursor: pointer;

            color: var(--theme-text);
            height: $height;

            // Reset styles.
            background: none;
            border: none;
            border-radius: 0.5rem;
            outline: none;

            padding: 0 1rem;

            // Remove element from flow and move to the far right.
            position: absolute;
            align-self: flex-end;
            // Vertically align text.
            display: flex;
            align-items: center;

            // When focused, add a border around the very edge of the element.
            &:focus {
                padding: 0 calc(1rem - 2px);

                border: 2px solid var(--theme-border);
            }
        }
        // If the input is a password, padding must be adjusted to account for the show/hide button.
        // This prevents the show/hide button from overlapping the input.
        input[data-type="password"] {
            padding-right: 2.75rem;
        }
        // Create a caption 
        label.caption {
            pointer-events: none;

            height: $height;
            color: #ccc;

            // Remove text from flow (covers )
            position: absolute;
            
            // Vertically align text.
            display: flex;
            align-items: center;
            
            // Space text away from the left.
            margin-left: 0.5rem;
            
            $time: 0.1s;
            $timing: ease-in-out;
            
            $transition: null;
            @each $type in [ padding margin height transform font-size background-color ] {
                $transition: $transition, $type $time $timing
            }
            // transition:
            //     padding          $time $timing,
            //     margin           $time $timing,
            //     height           $time $timing,
            //     transform        $time $timing,
            //     font-size        $time $timing,
            //     background-color $time $timing;
            transition: $transition;
        }
        // If the input is focused or has a value (placeholder is not shown), move the label to the top and make it smaller.
        :where(input:focus, input:not(:placeholder-shown)) + label.caption {
            pointer-events: none;

            padding: 0 0.15rem;
            margin: 0 0.35rem;
            
            color: var(--theme-text);

            height: 1rem;
            transform: translateY(-50%);
            font-size: 0.75rem;
            background-color: var(--theme-background);
        }
        // https://caniuse.com/mdn-css_selectors_where (89.73% support)
        @supports not selector(:where()) {
            input:focus + label, input:not(:placeholder-shown) + label.caption {
                pointer-events: none;
                
                padding: 0 0.15rem;
                margin: 0 0.35rem;
                
                color: var(--theme-text);

                height: 1rem;
                transform: translateY(-50%);
                font-size: 0.75rem;
                background-color: var(--theme-background);
            }
        }
        // Without this, the label/placeholder will overlap the inputted text.
        // https://caniuse.com/css-placeholder-shown (94.28% support)
        @supports not selector(:placeholder-shown) {
            input + label.caption {
                pointer-events: none;
                
                padding: 0 0.15rem;
                margin: 0 0.35rem;
                
                color: var(--theme-text);
    
                height: 1rem;
                transform: translateY(-50%);
                font-size: 0.75rem;
                background-color: var(--theme-background);
            }
        }
        // Style both the invalid message and the spacer identically.
        label.invalid-message,
        div.spacer {
            display: none;
            margin: 0.25rem 0;

            color: var(--theme-orange);
            font-size: 0.75rem;
        }
        // Create a spacer underneath the input to avoid the invalid message changing the flow of the page.
        div.spacer {
            pointer-events: none;
            color: transparent;
        }
        // When the input is invalid, the invalid message is shown.
        // When the input is valid, the spacer is shown.
        input:invalid ~ label.invalid-message,
        input:valid ~ div.spacer {
            display: block;
        }
    }
</style>