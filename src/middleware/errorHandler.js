import { config } from "../config";

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  return res.status(500).json({
    message: config.nodeEnv === "production" ? "error" : `${err}`,
  });
};

export { errorHandler };
