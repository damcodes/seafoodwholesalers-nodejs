'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'companyId', {
      type: Sequelize.INTEGER,
      references: { model: 'Companies', key: 'id' }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'companyId');
  }
};
