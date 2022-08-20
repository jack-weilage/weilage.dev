<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    /** The code's total length. */
    export let length = 4
    /** The RegExp to match each entered character against. */
    export let regex = /^[a-zA-Z0-9]$/

    /** **BIND_ONLY:** Stores a list of all inputs in the form. */
    export let inputs: HTMLInputElement[] = Array(length).fill(null)
    /** **BIND_ONLY:** Stores a list of all inputs' values. */
    export let values: string[] = Array(length).fill('')
    
    // Store the currently focused index.
    let focused = -1
    
    /** If every value matches the regex, dispatch a `submit` event. */
    function attemptSubmit(values: string[])
    {
        if (values.every(v => v.match(regex)))
        {
            dispatch('submit', values)
            return true
        }
        return false
    }
    /** If the predicate function evaluates true, focus the input at `index`. */
    function attemptFocus(index: number, predicate: (input: HTMLInputElement) => boolean)
    {
        const input = inputs[index]

        if (predicate(input))
        {
            input.focus()
            return true
        }
        return false
    }

    /** When an input is focused, update `focused` to the focused input's index. */
    function on_focus(e: FocusEvent)
    {
        const input = e.target as HTMLInputElement
        const i = Number(input.dataset.index)

        focused = i
    }
    /** When an input is unfocused, update `focused` to -1. */
    function on_blur()
    {
        focused = -1
    }
    /** Move back when `Backspace` or `ArrowLeft` is pressed and forward when `Delete` or `ArrowRight` is pressed. */
    function on_keydown(e: KeyboardEvent)
    {
        const input = e.target as HTMLInputElement
        const i = Number(input.dataset.index)

        switch (e.key)
        {
            case 'Backspace':
                if (inputs[i].selectionStart === 0 && i > 0)
                {
                    inputs[i - 1].focus()
                    inputs[i - 1].selectionStart = inputs[i - 1].selectionEnd = inputs[i - 1].value.length
                    // If default is not prevented, the previous input will be focused, then the backspace key will be registered there instead.
                    e.preventDefault()
                }
                break
            case 'Delete':
                if (inputs[i].selectionEnd === values[i].length && i < length - 1)
                {
                    inputs[i + 1].focus()
                    inputs[i + 1].selectionStart = inputs[i + 1].selectionEnd = 0
                    // If default is not prevented, the next input will be focused, then the delete key will be registered there instead.
                    e.preventDefault()
                }
                break
            case 'ArrowLeft': case 'ArrowUp':
                if (inputs[i].selectionStart === 0 && i > 0)
                {
                    inputs[i - 1].focus()
                    inputs[i - 1].selectionStart = inputs[i - 1].selectionEnd = inputs[i - 1].value.length
                    // If default is not prevented, the previous input will be focused, then the left arrow key will be registered there instead.
                    e.preventDefault()
                }
                break
            case 'ArrowRight': case 'ArrowDown':
                if (inputs[i].selectionEnd === values[i].length && i < length - 1)
                {
                    inputs[i + 1].focus()
                    inputs[i + 1].selectionStart = inputs[i + 1].selectionEnd = 0
                    // If default is not prevented, the next input will be focused, then the right arrow key will be registered there instead.
                    e.preventDefault()
                }
                break
            default:
                break
        }
    }
    /** 
     * If text has been added, attempt to submit the form. If the form cannot be submitted, attempt to focus the next input.
     * 
     * @warn This event seems to have a bugged TypeScript definition.
    */
    function on_input(e: Event & { currentTarget: EventTarget & HTMLInputElement })
    {
        // Force the event to be casted to InputEvent.
        const event = e as unknown as InputEvent

        const input = event.target as HTMLInputElement
        const i = Number(input.dataset.index)

        if (event.inputType === 'insertText')
        {
            // If text has been added, attempt to submit the form.
            if (!attemptSubmit(values))
            {
                // Focus the next input if the values could not be submitted.
                attemptFocus(i + 1, () => i < length - 1)
            }
        }
    }
    /** When a user pastes text, filter out all characters which do not match `regex`, then add it, character by character, to inputs. */
    function on_paste(e: ClipboardEvent)
    {
        const input = e.target as HTMLInputElement
        const i = Number(input.dataset.index)

        // Filter out all characters which do not match the regex.
        const paste = e.clipboardData?.getData('text/plain')
            .split('')
            .filter(c => c.match(regex))
            .join('')
        
        if (paste && paste.length > 0)
        {
            for (let j = i; j < Math.min(i + paste.length, length); j++)
            {
                values[j] = paste[j - i]

                // Focus the next input, if possible.
                attemptFocus(j + 1, () => j < length - 1)
            }
            // If the user has entered all the digits, submit the form.
            attemptSubmit(values)
        }
    }
</script>

<form>
    <div class="inputs">
        <!-- This is a hack to create `for (let i = 0; i < length; i++)` in Svelte notation. -->
        {#each { length } as _, i}
            <input type="text" placeholder="•" data-index={i}
                bind:this={inputs[i]}
                bind:value={values[i]}
    
                on:focus={on_focus}
                on:blur={on_blur}
    
                on:keydown={on_keydown}
                on:input={on_input}
                on:paste={on_paste}
    
                maxlength="1" pattern={regex.source} required
            >
        {/each}
    </div>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        div.inputs {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            input[type="text"] {
                width: 3rem;
                height: 4rem;
                
                font-size: 2rem;
                text-align: center;
        
                color: var(--theme-text);
                background-color: var(--theme-background);
                
        
                outline: none;
                border: 2px solid var(--theme-text);
                border-radius: 0.5rem;
        
                margin: 0.5rem;
        
                transition: border-color 0.3s ease-out;
    
                &:focus::placeholder {
                    color: transparent;
                }
                &:valid {
                    border-color: var(--theme-green);
                }
                &:invalid {
                    border-color: var(--theme-orange);
                }
            }
        }
    }
</style>