'use strict';
const {
  Model
} = require('sequelize');
const { info } = require('../core/logger.js');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsTo(models.Route);
      info("BLUE", "Order assocations set");
    }
  };
  Order.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: 'pending'
    },
    orderNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    orderTotal: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },
    RouteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stop: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};