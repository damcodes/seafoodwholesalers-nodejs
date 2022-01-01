'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'companyId', 'CompanyId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Users', 'CompanyId', 'companyId');
  }
};
