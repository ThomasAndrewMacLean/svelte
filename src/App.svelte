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

  document.documentElement.style.setProperty("--grid-size", GRID_SIZE);
</script>

<Slider />
