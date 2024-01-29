import express from "express";
import { getMegaverse1 } from "../../controllers";

const megaverse1 = express.Router();

megaverse1.get("/megaverse-1", getMegaverse1);

export { megaverse1 };
