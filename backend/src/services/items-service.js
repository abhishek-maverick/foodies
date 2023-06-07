const { Items } = require("../models/index");

class ItemService {
  async create(data) {
    try {
      const Item = await Items.create({
        name: data.name,
        restaurantId: data.restaurantId,
        price: data.price,
        ratings: data.ratings,
      });
      return Item;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteItem(ItemId) {
    try {
      await Items.destroy({
        ItemId: ItemId,
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateItem(ItemId) {
    try {
      const Item = Items.update({
        data,
        where: {
          ItemId: ItemId,
        },
      });
      return Item;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getItem(ItemId) {
    try {
      const Item = await Items.findAll({
        ItemId: ItemId,
      });
      return Item;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllItems() {
    try {
      const Items = await Items.findAll();
      return restaurants;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = ItemService;
