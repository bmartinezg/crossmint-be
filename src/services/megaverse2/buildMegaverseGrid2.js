const SPACE_VALUE = "SPACE";
const POLYANET_VALUE = "POLYANET";
const SOLOON_VALUE = "SOLOON";
const COMETH_VALUE = "COMETH";

export const buildMegaverseGrid2 = () => {
  const grid = [];

  for (let i = 0; i < 10; i++) {
    const column = [];
    for (let j = 0; j < 10; j++) {
      if (j % 4 === 0) {
        column.push(SOLOON_VALUE);
      } else if (j % 2 === 0) {
        column.push(SPACE_VALUE);
      } else {
        if (i % 4 === 0) {
          column.push(POLYANET_VALUE);
        } else {
          column.push(COMETH_VALUE);
        }
      }
    }
    grid.push(column);
  }

  return grid;
};
