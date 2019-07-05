<script>
  export let name;
  let voornaam = "Ann";
  let watte = "";
  // import Todos from './Todos.svelte'

  const addd = () => {
    console.log(fullName);
    watte = "😘 Love you!!!!!!!";
  };
  $: fullName = `${voornaam} ${name}`;
</script>

<button on:click={addd}>clickkee</button>
<h1>{fullName}!!</h1>
 <h1>
 {watte}
 </h1>
