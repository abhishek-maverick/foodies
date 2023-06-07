"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      restaurantId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      itemId: DataTypes.INTEGER,
      ratings: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      status: {
        type: DataTypes.ENUM,
        defaultValue: "In Process",
        values: ["In Process", "Delivered", "Cancelled"],
      },
      restName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
