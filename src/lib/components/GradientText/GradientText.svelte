<span><slot /></span>

<style>
    span {
        /* text shouldn't wrap with a gradient */
        white-space: nowrap;

        background: var(--fill, linear-gradient(to right, red 0%, orange 25%, orange 50%, red 100%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        background-size: 200% 100%;
        
        animation: move-background 2.5s linear infinite;
    }
    @keyframes move-background {
        from {
            background-position: 100% 0;
        }
        to {
            background-position: -100% 0;
        }
    }
</style>