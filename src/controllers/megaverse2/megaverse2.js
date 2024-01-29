import { buildMegaverseGrid2 } from "../../services/megaverse2";

const getMegaverse2 = (_, res) => {
  const grid = buildMegaverseGrid2();

  res.status(200).json({
    data: {
      goal: grid,
    },
  });
};

export { getMegaverse2 };
