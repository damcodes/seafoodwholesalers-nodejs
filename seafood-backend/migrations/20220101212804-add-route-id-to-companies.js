'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Companies', 'RouteId', {
      type: Sequelize.INTEGER,
      references: { model: 'Routes', key: 'id' },
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Companies', 'RouteId');
  }
};
