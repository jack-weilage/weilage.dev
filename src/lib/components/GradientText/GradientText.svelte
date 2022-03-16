<span><slot /></span>

<style>
    span {
        /* text shouldn't wrap with a gradient */
        white-space: nowrap;

        background: var(--fill, linear-gradient(to right, red 0%, purple 25%, orange 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>