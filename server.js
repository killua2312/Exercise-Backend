const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");
const { sequelize } = require("./models");
const exerciseRoutes = require("./routes/exerciseRoutes");
const cors = require("cors");

const app = express();
const port = parseInt(process.env.EXPRESS_PORT);

const allowedOrigin = process.env.ALLOW_ORIGIN;
const corsOptions = {
  origin: allowedOrigin,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

const createRateLimiter = (windowMs, max) => {
  return rateLimit({
    windowMs,
    max,
    message: { error: "Too many requests, please try again later." },
    keyGenerator: (req) => req.apiKey,
  });
};

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 50,
  delayMs: 1000,
});

app.use(
  "/api",
  createRateLimiter(15 * 60 * 1000, 50),
  speedLimiter,
  exerciseRoutes,
);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running ${port}`);
  });
});
