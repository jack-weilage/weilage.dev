<script>
    export let href = '#main-content'
</script>

<a {href}>Skip To Main Content</a>

<style>
    a {
        position: absolute;
        left: 0;

        margin: 0.5rem;
        padding: 0.5rem;
        
        background: #fff;
        
        border-radius: 0.25rem;
        border: 1px solid #ccc;

        z-index: 999;
        transform: translateY(calc(-100% - 1px - 0.5rem - 0.5rem));

        transition: transform 0.5s;
    }
    a:focus {
        transform: translateY(0);
    }
</style>