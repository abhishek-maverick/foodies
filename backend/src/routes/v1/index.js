const express = require("express");
const RestaurantController = require("../../controllers/restaurant-controller");
const router = express.Router();

router.post("/restaurant", RestaurantController.create);
router.delete("/restaurant/:id", RestaurantController.destroy);
router.get("/restaurant/:id", RestaurantController.get);
router.get("/restaurant", RestaurantController.getAll);
router.patch("/restaurant/:id", RestaurantController.update);
// router.post("/restaurant", RestaurantController.create);
module.exports = router;
