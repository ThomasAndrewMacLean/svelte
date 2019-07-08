export const canSwapTiles = (gridSize, nullIndex, clickIndex) => {
    //Check Up
    if (nullIndex === clickIndex - gridSize) {
        return true;
    }

    //Check Down
    if (nullIndex === clickIndex + gridSize) {
        return true;
    }
    //Check Left
    if (nullIndex === clickIndex - 1 && clickIndex % gridSize !== 0) {
        return true;
    }
    //Check Right
    if (nullIndex === clickIndex + 1 && clickIndex % gridSize !== gridSize) {
        return true;
    }

    return false;
};
