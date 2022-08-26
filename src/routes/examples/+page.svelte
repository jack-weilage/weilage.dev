<script lang="ts">
    import { SvEO, ColorPicker } from '!components'

    import Login from './Login.svelte'
    import TwoFactorEntry from './2fa.svelte'

    const components: {
        name: string
        description: string
        //TODO: Find a good type for components (not SvelteComponent)
        component: any
        props?: Record<string, any>
    }[] = [
        {
            name: 'Login',
            description: 'A fancy, minimal login form.',

            component: Login,
        },
        {
            name: 'Two Factor Entry',
            description: 'A two factor authentication entry form. Try pasting a code!',

            component: TwoFactorEntry,
        },
        {
            name: 'HSL Color Picker',
            description: 'A color picker that uses the HSL color model.',

            component: ColorPicker,
        },
    ]
</script>

<SvEO
    title="Examples - Jack Weilage"
    description="A collection of Svelte components for use in web development."
    author="Jack Weilage"
    keywords={['svelte', 'components', 'examples']}
    canonical="https://weilage.dev/examples/"
/>

<main id="main-content">
    {#each components as { name, description, component, props }}
        <section>
            <header>
                <h2>{name}</h2>
                <p>{description}</p>
            </header>
            <main>
                <svelte:component this={component} {...props ?? {}} />
            </main>
        </section>
    {/each}
</main>

<style lang="scss">
    main {
        @include flex($wrap: wrap, $justify: space-around, $align: flex-start);

        padding: 1rem;

        section {
            min-width: 30%;
            width: min-content;

            margin: 1rem;

            border: 1px solid var(--theme-border);
            border-radius: 1rem;

            header {
                padding: 1rem;
                border-bottom: 1px solid var(--theme-border);

                h2 {
                    margin-top: 0;
                }
                p {
                    margin-bottom: 0;
                }
            }
            main {
                min-height: 15rem;

                display: grid;
                // center content
                justify-content: center;
                align-items: center;

                padding: 1rem;
            }
        }
    }
</style>
