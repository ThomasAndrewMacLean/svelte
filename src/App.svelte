<script>
    import Slider from './Slider.svelte';
    import Footer from './Footer.svelte';
    const GRID_SIZE = 3;

    // check if screen is portrait or landscape.
    if (window.innerWidth > window.innerHeight) {
        document.documentElement.style.setProperty('--container-size', '80vh');
    }
    document.documentElement.style.setProperty('--grid-size', GRID_SIZE);

    let gridSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-size'));
</script>

<Slider {gridSize} />
<Footer />
