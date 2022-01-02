'use strict';
const {
  Model
} = require('sequelize');
const useBcrypt = require('sequelize-bcrypt');
const { info } = require('../core/logger.js');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    validPassword = (password) => {
      return bcrypt.compareSync(password, this.password);
    }

    static associate(models) {
      User.belongsTo(models.Company);
      User.hasMany(models.Order);
      info("BLUE", "User assocations set");
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer"
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  useBcrypt(User);
  return User;
};