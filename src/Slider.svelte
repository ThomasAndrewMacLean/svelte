<script>
  import { canSwapTiles } from "./utils/canSwapTiles.js";

  let gridSize = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--grid-size")
  );
  let sliderBlocks = [];

  for (let i = 1; i < gridSize * gridSize; i++) {
    sliderBlocks.push(i);
  }
  sliderBlocks.push(null);

  function shuffle(x) {
    return x.sort((a, b) => 0.5 - Math.random());
  }
  shuffle(sliderBlocks);
  sliderBlocks = sliderBlocks;

  const clickBlock = event => {
    const indexBlockClicked = parseInt(event.target.dataset.index);
    const indexNull = sliderBlocks.indexOf(null);

    const canSwap = canSwapTiles(gridSize, indexNull, indexBlockClicked);

    if (canSwap) {
      sliderBlocks[indexNull] = sliderBlocks[indexBlockClicked];
      sliderBlocks[indexBlockClicked] = null;
      sliderBlocks = sliderBlocks;
    }

    
  };
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(var(--grid-size), auto);
    grid-template-rows: repeat(var(--grid-size), auto);
    width: 80vw;
    height: 80vw;
    background: lightcyan;
  }

  .empty {
    background: lightgreen;
    cursor: auto !important;
  }
  .block {
    outline: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
</style>

<main>
  <div class="container">
    {#each sliderBlocks as block, index}
      <div
        data-index={index}
        class={block === null ? 'block empty' : 'block'}
        on:click={clickBlock}>
         {block} ({index})
      </div>
    {/each}
  </div>
</main>
