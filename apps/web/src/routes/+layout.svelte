<script lang="ts">
    import '!css/vars.pcss'
    import '!css/global.pcss'

    import Link from '!components/Link.svelte'
    import { inject } from '@vercel/analytics'
    import { page } from '$app/stores'

    inject()

    const header_links = {
        '/': 'Home',
        '/blog/': 'Blog',
        '/resume/': 'Resume',
    }
</script>

<header>
    <a class="skip" href="#main-content">Skip to main content</a>
    <nav>
        {#each Object.entries(header_links) as [ href, title ]}
            {@const is_current = $page.url.pathname === href}
            <Link
                {href}
                aria-current={is_current ? 'page' : undefined}
                aria-disabled={is_current ? 'true' : undefined}
                tabindex={is_current ? -1 : undefined}
            >
                {title}
            </Link>
        {/each}
    </nav>
</header>

<slot />

<style lang="postcss">
    header :global {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        background-color: var(--color--background-trans);
        backdrop-filter: saturate(180%) blur(5px);

        @media print {
            display: none;
        }
        & > a.skip {
            position: absolute;
            transform: translate(1rem, -100%);

            max-width: calc(100vw - 2rem);

            padding: 1rem;
            background-color: var(--color--background-alt);

            border-radius: 0.5rem;

            transition: transform 0.15s ease-out;

            &:focus {
                transform: translate(1rem, 1rem);
            }
        }
        & > nav {
            display: flex;
            justify-content: flex-end;
            gap: 1.25rem;

            padding: 1.5rem;

            @media (width <= 700px) {
                justify-content: center;
            }
            & > a {
                width: 7.5rem;
                padding: 0.45rem 0.5rem;

                text-align: center;
                font-size: 0.9em;

                background-color: var(--color--background);

                border-radius: 0.5rem;
                border: 2px solid transparent;

                transition: border-color 0.15s ease-out, transform 0.05s ease-out;

                &[aria-current="page"] {
                    color: var(--color--text-alt);
                }
                &:hover, &:focus {
                    border-color: var(--color--blue);
                    text-decoration: none;

                    &[aria-current="page"] {
                        border-color: var(--color--text-alt);
                    }
                }
                &:active {
                    transform: translateY(5%);
                    opacity: 0.7;
                }
            }
        }
    }
</style>
