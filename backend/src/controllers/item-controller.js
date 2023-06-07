const ItemService = require("../services/items-service");

const itemService = new ItemService();

const create = async (req, res) => {
  try {
    const item = await itemService.create(req.body);
    return res.status(201).json({
      data: item,
      success: true,
      message: "Successfully created an item",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to create the item",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const item = await itemService.deleteItem(req.params.id);
    return res.status(201).json({
      data: item,
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
    const item = await restaurantService.getItem(req.params.id);
    return res.status(201).json({
      data: item,
      success: true,
      message: "Successfully received the item details",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to get the item",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const item = await itemService.updateItem(req.params.id, req.body);
    return res.status(201).json({
      data: restaurant,
      success: true,
      message: "Successfully updated the item details",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to update the item",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const item = await itemService.getAllItems();
    return res.status(201).json({
      data: item,
      success: true,
      message: "Successfully received all the items",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in controller layer");
    res.status(500).json({
      success: false,
      data: {},
      message: "Not able to get the items",
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
