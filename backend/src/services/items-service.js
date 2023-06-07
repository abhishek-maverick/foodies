const { Item } = require("../models/index");

class ItemService {
  async create(data) {
    try {
      const Item = await Item.create({
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
      await Item.destroy({
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
      const Item = Item.update({
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
      const Item = await Item.findOne({
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
      const Items = await Restaurant.findAll();
      return restaurants;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = ItemService;
