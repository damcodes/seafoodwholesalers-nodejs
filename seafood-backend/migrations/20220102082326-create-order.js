'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      orderStatus: {
        type: Sequelize.STRING,
        defaultValue: 'pending',
        allowNull: false
      },
      orderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      orderTotal: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0
      },
      RouteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Routes', key: 'id' }
      },
      stop: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};