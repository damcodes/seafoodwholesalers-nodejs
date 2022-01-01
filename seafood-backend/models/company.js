'use strict';
const {
  Model
} = require('sequelize');
const { info } = require('../core/logger.js');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {

    static associate(models) {
      // define association here
      Company.hasMany(models.User);
      info("BLUE", "Company assocations set");
    }
  };
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    longitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: false
    },
    latitude: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};