const { Restaurant } = require("../models/index");

class RestaurantService {
  async create(data) {
    try {
      const restaurant = await Restaurant.create({
        name: data.name,
        ratings: data.ratings,
        url: data.url,
        restaurantId: data.restaurantId,
      });
      return restaurant;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteRestaurant(restaurantId) {
    try {
      await Restaurant.destroy({
        restaurantId: restaurantId,
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async updateRestaurant(restaurantId) {
    try {
      const restaurant = Restaurant.update({
        data,
        where: {
          restaurantId: restaurantId,
        },
      });
      return restaurant;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getRestaurant(restaurantId) {
    try {
      const restaurant = await Restaurant.findOne({
        restaurantId: restaurantId,
      });
      return restaurant;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllRestaurants() {
    try {
      const restaurants = await Restaurant.findAll();
      return restaurants;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = RestaurantService;
