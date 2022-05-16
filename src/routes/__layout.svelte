<script>
    /**
     * I attempted to use `import.meta.globEager` to import all `.css` files automatically, but CSS requires
     * dependencies to be correctly ordered, which seems to not be possible with `import.meta.globEager`.
     * 
     * I also attempted to use `@import` in the `.css` files, but this created a FOUT each reload.
     * 
     * Just manually importing each file seems to work best.
    */
    import 'normalize.css'
    import '$lib/css/vars.css'
    import '$lib/css/global.css'

    import { LoadingIndicator } from '$lib/components'
    //@ts-expect-error SvelteKit decided to break today, so I'm just going to ignore the error for now.
    import { navigating } from '$app/stores'
</script>

{#if $navigating && $navigating.to}
    <LoadingIndicator />
{/if}

<slot />