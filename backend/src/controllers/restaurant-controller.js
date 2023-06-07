const RestaurantService = require("../services/restaurant-service");

const restaurantService = new RestaurantService();

const create = async (req, res) => {
  try {
    const restaurant = await restaurantService.create(req.body);
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully created a restaurant",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to create the restaurant",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const restaurant = await restaurantService.deleteRestaurant(req.params.id);
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully deleted the restaurant",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to delete the restaurant",
      err: error,
    });
  }
};
//GET -> restaurant/:id
const get = async (req, res) => {
  try {
    const restaurant = await restaurantService.getRestaurant(req.params.id);
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully received the restaurant details",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to get the restaurants",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully updated the restaurant details",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to update the restaurant",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const restaurant = await restaurantService.getAllRestaurants();
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully received all the restaurant details",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to get the restaurants",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
