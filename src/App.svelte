<script>
  export let name;
  let voornaam = "Thomas";
  let watte = "";
  // import Todos from './Todos.svelte'

  const addd = () => {
    console.log(fullName);
    watte = "😘";
  };
  $: fullName = `${voornaam} ${name}`;
</script>

<button on:click={addd}>clickkee</button>
<h1>{fullName}!!</h1>
 {watte}
