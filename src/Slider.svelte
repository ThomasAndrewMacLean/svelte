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
    // debugger;
    const indexBlockClicked = parseInt(event.target.dataset.index);
    const indexNull = sliderBlocks.indexOf(null);

    const canSwap = canSwapTiles(gridSize, indexNull, indexBlockClicked);
   // console.log(indexBlockClicked);
    if (canSwap) {
      sliderBlocks[indexNull] = sliderBlocks[indexBlockClicked];
      sliderBlocks[indexBlockClicked] = null;
      sliderBlocks = sliderBlocks;
    }
  };

  function imagedata_to_image(imagedata) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);

    //  var image = new Image();
    // image.src = canvas.toDataURL();
    return canvas.toDataURL();
  }

  var tileData = new Array();
  var srcArray = [];

  const splitImage = imageSource => {
    tileData = new Array();
    srcArray = [];

    var canvas = document.createElement("canvas");
    canvas.height = 400;
    canvas.width = 400;
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.src = imageSource;

    imageObj.onload = function() {
      var hRatio = canvas.width / imageObj.width;
      var vRatio = canvas.height / imageObj.height;
      var ratio = Math.min(hRatio, vRatio);
      canvas.height = imageObj.width * ratio;
      canvas.width = imageObj.width * ratio;
      ctx.drawImage(
        imageObj,
        0,
        0,
        imageObj.width,
        imageObj.width,
        0,
        0,
        imageObj.width * ratio,
        imageObj.width * ratio
      );

      var tilesX = gridSize;
      var tilesY = gridSize;
      //debugger;
      var tileWidth = canvas.width / gridSize;
      var tileHeight = canvas.width / gridSize;
      var totalTiles = tilesX * tilesY;
      for (var i = 0; i < tilesY; i++) {
        for (var j = 0; j < tilesX; j++) {
          // Store the image data of each tile in the array.

          // console.log(j * tileWidth, i * tileHeight);
          tileData.push(
            ctx.getImageData(
              j * tileWidth,
              i * tileHeight,
              tileWidth,
              tileHeight
            )
          );
        }
      }
      //From here you should be able to draw your images back into a canvas like so:
      //  ctx.putImageData(tileData[2], 10, 10);
      tileData.pop();
      //console.log(tileData);
      srcArray = tileData.map(x => imagedata_to_image(x));
      //srcArray.push(null);
      //console.log(srcArray);
      srcArray = srcArray;
    };
  };

  splitImage("./images/kiss.jpeg");

  const uploadPic = evt => {
    const newPic = evt.target.files[0];
    splitImage(URL.createObjectURL(newPic));
  };
</script>

<style>
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(var(--grid-size), auto);
    grid-template-rows: repeat(var(--grid-size), auto);
    width: var(--container-size);
    height: var(--container-size);
    background: lightcyan;
    user-select: none;
  }

  .empty {
    background: ghostwhite;
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

  #imgupload {
    display: none;
  }
  label {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    cursor: pointer;
    background: burlywood;
    border: 3px solid chocolate;
    padding: 1rem;
    font-size: 2rem;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
</style>

<main>
  <div class="container">
    {#each sliderBlocks as block, index}
      <div
        data-index={index}
        class={block === null ? 'block empty' : 'block'}
        on:click={clickBlock}>
        {#if srcArray[block - 1]}
          <!-- content here -->
          <img src={srcArray[block - 1]} alt={'tile ' + block} />
        {/if}
        <!-- {block} -->
      </div>
    {/each}
  </div>
  <input
    type="file"
    name="image"
    id="imgupload"
    accept="image/x-png,image/gif,image/jpeg"
    on:change={uploadPic} />
  <label for="imgupload" id="imgupload-btn">📸</label>
</main>
