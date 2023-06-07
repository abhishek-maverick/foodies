"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init(
    {
      itemId: DataTypes.INTEGER,
      restaurantId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      url: DataTypes.STRING,
      ratings: DataTypes.STRING,
      restName: DataTypes.STRING,
      restaurantId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Items",
    }
  );
  return Items;
};
