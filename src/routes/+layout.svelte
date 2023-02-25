<script lang="ts">
    import '!css/vars.pcss'
    import '!css/global.pcss'

    import { page } from '$app/stores'

    const no_header_paths = [ '/resume/' ]
    const header_links = {
        '/': 'Home',
        '/resume/': 'Resume',
        '/blog/': 'Blog'
    }
</script>

{#if !no_header_paths.includes($page.url.pathname)}
    <header>
        <a class="skip" href="#main-content">Skip to main content</a>
        <nav>
            {#each Object.entries(header_links) as [ href, title ]}
                <a {href} aria-current={$page.url.pathname === href ? 'page' : undefined}>{title}</a>
            {/each}
        </nav>
    </header>
{/if}

<slot />

<style lang="postcss">
    header :global {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        background-color: var(--color--background-trans);
        backdrop-filter: blur(20px) saturate(150%);

        & > a.skip {
            position: absolute;
            transform: translate(1rem, -100%);

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

                border-radius: 0.5rem;
                border: 2px solid transparent;

                transition: border-color 0.15s ease-out, transform 0.05s ease-out;

                &[aria-current="page"] {
                    color: var(--color--text-alt);
                }
                &:hover, &:focus {
                    border-color: var(--color--blue);
                    text-decoration: none;
                }
                &:active {
                    transform: translateY(5%);
                    opacity: 0.7;
                }
            }
        }
    }
</style>