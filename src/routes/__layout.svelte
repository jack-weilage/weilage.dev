<script>
    import SkipToLink from '$lib/components/SkipToLink'
    import Header from '$lib/components/Header'
    import Footer from '$lib/components/Footer'
</script>

<SkipToLink href="#main-content" />

<div>
    <Header />
    <slot />
    <Footer />
</div>

<style>
    div {
        display: flex;
        flex-flow: column nowrap;

        width: 100%;
        height: 100%;
    }
</style>