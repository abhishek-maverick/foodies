const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");
const ItemService = require("./services/items-service");
const { report } = require("./routes/index");

const setupAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    const repo = new ItemService();
    await repo.create({
      name: "Mix Veg Platter",
      ratings: "4.5",
      price: 593,
      restaurantId: 229832,
    });

    const DB_SYNC = false;
    if (DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
