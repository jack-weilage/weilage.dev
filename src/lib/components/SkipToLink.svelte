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
        
        color: #000;
        background-color: #fff;
        
        border-radius: 0.25rem;
        border: 1px solid #ccc;

        z-index: 999;
        transform: translateY(-1000%);

        transition: transform 0.5s ease-in-out;
    }
    a:focus {
        transform: translateY(0);
    }
</style>