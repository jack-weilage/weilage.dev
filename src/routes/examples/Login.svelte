<script lang="ts">
    import { Link, LabelledInput } from '!components'

    /** The RegEx to check both username and password against. */
    export let regex = {
        username: /^[a-zA-Z0-9_]{3,32}$/,
        // 3+ numbers, 1+ capital letter, 8-32 characters
        // password: /^(?=(?:.*[0-9]){3,})(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
        password: /^[a-zA-Z0-9_]{8,32}$/
    }
    export let values = {
        username: '',
        password: '',
    }

    async function on_submit()
    {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        })

        if (response.status === 200)
        {
            const { success, message } = await response.json()
            
            alert(message)
            console.log('success:', success)
        }
        else
        {
            console.error('error:', response.status)
        }
    }
</script>

<form on:submit|preventDefault={on_submit}>
    <div class="section">
        <LabelledInput
            bind:value={values.username} 
            id="username" name="user" type="text" 
            pattern={regex.username.source} spellcheck="false" autocapitalize="off" autocomplete="username" required
        >Username</LabelledInput>
    </div>

    <div class="section">
        <LabelledInput 
            bind:value={values.password} 
            id="password" name="pass" type="password" 
            pattern={regex.password.source} spellcheck="false" autocapitalize="off" autocomplete="password" required
        >Password</LabelledInput>
    </div>

    <Link href="#" title="Forgot your password?" data-sveltekit-prefetch>Forgot your password?</Link>
    <button type="submit">Sign in</button>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        width: min-content;

        padding: 1rem;

        div.section {
            margin-bottom: 0.75rem;
        }
        button[type="submit"] {
            cursor: pointer;

            outline: none;
            border: 2px solid var(--theme-border);
            border-radius: 0.5rem;

            background-color: var(--theme-background);
            color: var(--theme-text);

            width: 100%;
            padding: 0.5rem;

            margin: 1.5rem 0 0.5rem;

            transition: border-color 0.2s ease-out;

            &:focus {
                outline: 2px solid var(--theme-text);
                outline-offset: 3px;
            }
        }
        &:valid button[type="submit"] {
            border-color: var(--theme-green);
        }
        &:invalid button[type="submit"] {
            border-color: var(--theme-orange);
        }
        :global(a) {
            align-self: flex-start;
            font-size: 0.8em;
        }
    }
</style>