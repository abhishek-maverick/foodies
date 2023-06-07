const express = require("express");
const RestaurantController = require("../../controllers/restaurant-controller");
const ItemController = require("../../controllers/item-controller");
const router = express.Router();

router.post("/restaurant", RestaurantController.create);
router.delete("/restaurant/:id", RestaurantController.destroy);
router.get("/restaurant/:id", RestaurantController.get);
router.get("/restaurant", RestaurantController.getAll);
router.patch("/restaurant/:id", RestaurantController.update);

router.post("/item", ItemController.create);
router.delete("/item/:id", ItemController.destroy);
router.get("/item/:id", ItemController.get);
router.get("/item", ItemController.getAll);
router.patch("/item/:id", ItemController.update);
module.exports = router;
