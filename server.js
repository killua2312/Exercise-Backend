const express = require("express");
const helmet = require("helmet");
const { sequelize } = require("./models");
const exerciseRoutes = require("./routes/exerciseRoutes");
const cors = require("cors");

const app = express();
const port = parseInt(process.env.EXPRESS_PORT);

const allowedOrigin = "https://aquamarine-stardust-a0b586.netlify.app";
const corsOptions = {
  origin: allowedOrigin,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

app.use("/api", exerciseRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running ${port}`);
  });
});
