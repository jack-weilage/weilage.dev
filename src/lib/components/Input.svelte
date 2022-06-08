<!-- 
TODO:
- Decide whether the input should show as valid/invalid when empty.
 -->
<script lang="ts">
    import { forward_events } from '$lib/actions'
    import View from 'carbon-icons-svelte/lib/View.svelte'
    import ViewOff from 'carbon-icons-svelte/lib/ViewOff.svelte'

    export let type = 'text'
    export let id: string
    export let name: string
    export let placeholder: string = ' '
    export let forwarded_events: string[] = []

    export let invalid_message = ''

    export let value = ''

    let input: HTMLInputElement
    function on_input()
    {
        value = input.value
    }

    let input_hidden = true
</script>

<div>
    <input
        use:forward_events={forwarded_events} bind:this={input} on:input={on_input}
        type={input_hidden ? type : 'text'} data-type={type} {name} {id} {placeholder}
        {...$$restProps}
    >
    <label class="caption" for={id}>
        <slot></slot>
    </label>
    {#if type === 'password'}
        <button type="button" title={`${input_hidden ? 'Show' : 'Hide'} password`} on:click={() => input_hidden = !input_hidden}>
            {#if input_hidden}
                <View />
            {:else}
                <ViewOff />
            {/if}
        </button>
    {/if}
    {#if invalid_message}
        <label class="invalid-message" for={id}>{invalid_message}</label>
        <div class="spacer" aria-hidden>{invalid_message}</div>
    {/if}
</div>

<style lang="scss">
    div {
        --height: 3rem;

        display: flex;
        flex-flow: column nowrap;

        input {
            width: 100%;
            height: var(--height);

            min-width: 17.5rem;

            background-color: var(--theme-background);
            color: var(--theme-text);

            padding: 0.5rem;

            outline: none;
            border: 2px solid var(--theme-border);
            border-radius: 0.5rem;

            transition: border-color 0.2s ease-out;

            &::placeholder {
                color: transparent;
            }
            &:focus::placeholder {
                color: #ccc;
            }

            &:user-valid {
                border-color: var(--theme-green);
            }
            &:user-invalid {
                border-color: var(--theme-orange);
            }
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
        input[data-type="password"] {
            padding-right: 2.75rem;
        }
        label.caption {
            pointer-events: none;

            height: var(--height);
            color: #ccc;

            position: absolute;
            
            // vertically center text
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            
            margin: 0 0.5rem;
            
            --time: 0.1s;
            --timing: ease-in-out;
            transition:
                padding          var(--time) var(--timing),
                margin           var(--time) var(--timing),
                height           var(--time) var(--timing), 
                transform        var(--time) var(--timing), 
                font-size        var(--time) var(--timing), 
                background-color var(--time) var(--timing);
        }
        :where(input:focus, input:not(:placeholder-shown)) + label.caption {
            padding: 0 0.15rem;
            margin: 0 0.35rem;

            pointer-events: none;
            
            color: var(--theme-text);

            height: 1rem;
            transform: translateY(-50%);
            font-size: 0.75rem;
            background-color: var(--theme-background);
        }
        // https://caniuse.com/css-placeholder-shown (94.28% support)
        @supports not selector(:placeholder-shown) {
            input + label.caption {
                padding: 0 0.15rem;
                margin: 0 0.35rem;
    
                pointer-events: none;
                
                color: var(--theme-text);
    
                height: 1rem;
                transform: translateY(-50%);
                font-size: 0.75rem;
                background-color: var(--theme-background);
            }
        }
        // https://caniuse.com/mdn-css_selectors_where (89.73% support)
        @supports not selector(:where()) {
            input:focus + label, input:not(:placeholder-shown) + label.caption {
                padding: 0 0.15rem;
                margin: 0 0.35rem;
                
                pointer-events: none;
                
                color: var(--theme-text);

                height: 1rem;
                transform: translateY(-50%);
                font-size: 0.75rem;
                background-color: var(--theme-background);
            }
        }
        button {
            cursor: pointer;

            color: var(--theme-text);
            height: var(--height);

            background: none;
            border: none;
            border-radius: 0.5rem;
            outline: none;

            padding: 0 1rem;

            position: absolute;
            align-self: flex-end;

            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            &:focus {
                padding: 0 calc(1rem - 2px);

                border: 2px solid var(--theme-border);
            }
        }
        label.invalid-message,
        div.spacer {
            display: none;
            margin: 0.25rem 0;

            color: var(--theme-orange);
            font-size: 0.75rem;
        }
        div.spacer {
            pointer-events: none;
            color: transparent;
        }
        input:invalid ~ label.invalid-message,
        input:valid ~ div.spacer {
            display: block;
        }
    }
</style>