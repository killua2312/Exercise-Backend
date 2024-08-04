const express = require("express");
const helmet = require("helmet");
const { sequelize } = require("./models");
const exerciseRoutes = require("./routes/exerciseRoutes");
const cors = require("cors");

const app = express();
const port = parseInt(process.env.EXPRESS_PORT) || 3002;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(helmet());
app.use(express.json());

app.use("/api", exerciseRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running ${port}`);
  });
});
