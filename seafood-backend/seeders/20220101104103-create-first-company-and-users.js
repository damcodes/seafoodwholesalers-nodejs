'use strict';
const { Company } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies',[
      {
        name: 'Seafood Wholesalers',
        address: "6060b Southwest Freeway, Houston, TX 77057",
        phoneNumber: "7136191969",
        longitude: -95.48655448,
        latitude: 29.72702631,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    const sfw = await Company.findOne({
      where: {
        name: 'Seafood Wholesalers'
      }
    });

    let salt = bcrypt.genSaltSync(12);
    let hashedPass = bcrypt.hashSync('123456', salt);
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "David",
        lastName: "Molina",
        email: "david@seafoodwholesalers.com",
        password: hashedPass,
        role: "management",
        admin: true,
        companyId: sfw.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Ashley",
        lastName: "Molina",
        email: "ashley@seafoodwholesalers.com",
        password: hashedPass,
        role: "management",
        admin: true,
        companyId: sfw.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null);
    queryInterface.bulkDelete('Companies', null);
  }
};
