<script>
  import Slider from "./Slider.svelte";
  const GRID_SIZE = 3;

  //   export let name;
  //   let voornaam = "Ann";
  //   let watte = "";
  //   const addd = () => {
  //     console.log(fullName);
  //     watte = "😘 Love you!!!!!!!";
  //   };
  //   $: fullName = `${voornaam} ${name}`;

  // check if screen is portrait or landscape.
  if (window.innerWidth > window.innerHeight) {
    document.documentElement.style.setProperty("--container-size", "80vh");
  }
  document.documentElement.style.setProperty("--grid-size", GRID_SIZE);
</script>

<Slider />
