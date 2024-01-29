import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { config } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import { megaverse1, megaverse2 } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.clientOrigins[config.nodeEnv],
  })
);

/* Addons */
app.use(helmet());
app.use(morgan("tiny"));

/* Routing */
app.use("/", megaverse1);
app.use("/", megaverse2);

/* Error handling */
app.use(errorHandler);

export default app;
