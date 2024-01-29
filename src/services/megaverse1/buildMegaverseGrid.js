const SPACE_VALUE = "SPACE";
const POLYANET_VALUE = "POLYANET";

export const buildMegaverseGrid = () => {
  const grid = [];

  for (let i = 0; i < 10; i++) {
    const column = [];
    for (let j = 0; j < 10; j++) {
      if (j % 2 === 0) {
        column.push(SPACE_VALUE);
      } else {
        if (i === 4 || i === 5) {
          column.push(POLYANET_VALUE);
        } else {
          column.push(SPACE_VALUE);
        }
      }
    }
    grid.push(column);
  }

  return grid;
};
