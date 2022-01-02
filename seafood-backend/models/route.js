'use strict';
const {
  Model
} = require('sequelize');
const { info } = require('../core/logger.js');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    static associate(models) {
      Route.hasMany(models.Company);
      Route.hasMany(models.Order);
      info("BLUE", "Route assocations set");
    }
  };
  Route.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pre-ship'
    }
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};