<script lang="ts">
    export let href: string
</script>

<a {href}>Skip To Main Content</a>

<style>
    a {
        position: absolute;
        left: 0;

        margin: 0.5rem;
        padding: 0.5rem;
        
        color: #000;
        background-color: #fff;
        
        border-radius: 0.25rem;
        border: 1px solid #ccc;

        z-index: 999;
        transform: translateX(-200%);

        transition: transform 0.25s ease-in-out;
    }
    a:focus {
        transform: translateX(0);
    }
</style>