<script lang="ts" context="module">
    export const sitemap = { enabled: true }
    
    import type { Load } from '@sveltejs/kit/types'
    export const load: Load = ({ url }) => ({ props: { url } })
</script>
<script lang="ts">
    import { SvEO, Link, Copy, SkipToLink, ColorPicker } from '$lib/components'
    import Login from './_login.svelte'
    import TwoFactorEntry from './_2fa.svelte'

    export let url: URL

    interface Component {
        name: string
        description: string
        //TODO: Find a good type for components
        component: any
        props?: Record<string, any>
    }
    const components: Component[] = [
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
        }
    ]
</script>

<SvEO 
    title="Examples - Jack Weilage"
    description="A collection of Svelte components for use in web development."
    author="Jack Weilage"
    keywords={[ 'svelte', 'components', 'examples' ]}
    canonical="https://weilage.dev/examples/"
/>

<header>
    <SkipToLink href="#main-content" />
    <Link href="/" icon={false}>Home</Link>
</header>

<main id="main-content">
    {#each components as { name, description, component, props }}
        {@const id = name.toLowerCase().replace(/\s/g, '-')}
        {@const to_copy = `${url.protocol}//${url.host}${url.pathname}#${id}`}
        <section {id}>
            <header>
                <h2>{name}<Copy {to_copy} /></h2>
                <p>{description}</p>
            </header>
            <main>
                <svelte:component this={component} {...props ?? {}} />
            </main>
        </section>
    {/each}
</main>

<style lang="scss">
    header {
        padding: 1rem;
    }
    main {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: flex-start;

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