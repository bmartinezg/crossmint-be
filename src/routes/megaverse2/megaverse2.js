import express from "express";
import { getMegaverse2 } from "../../controllers";

const megaverse2 = express.Router();

megaverse2.get("/megaverse-2", getMegaverse2);

export { megaverse2 };
