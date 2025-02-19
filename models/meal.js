'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meal.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    carbs: DataTypes.INTEGER,
    fats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};