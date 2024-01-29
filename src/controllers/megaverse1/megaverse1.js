import { buildMegaverseGrid } from "../../services/megaverse1";

const getMegaverse1 = (_, res) => {
  const grid = buildMegaverseGrid();

  res.status(200).json({
    data: {
      goal: grid,
    },
  });
};

export { getMegaverse1 };
