<script>
  export let name;
  let voornaam = "Thomas";
  // import Todos from './Todos.svelte'

  const addd = () => {
    console.log(fullName);
  };
  $: fullName = `${voornaam} ${name}`;
</script>

<button on:click={addd}>clickkee</button>
<span>{fullName}</span>
