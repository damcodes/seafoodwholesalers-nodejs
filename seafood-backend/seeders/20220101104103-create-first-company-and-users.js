'use strict';
const { Company, Route } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Routes', [
      { name: 'SFW', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Katy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Downtown', createdAt: new Date(), updatedAt: new Date() },
      { name: 'South', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sugarland', createdAt: new Date(), updatedAt: new Date() },
      { name: 'North', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Galveston', createdAt: new Date(), updatedAt: new Date() }
    ]);

    const sfwRoute = await Route.findOne({
      where: {
        name: 'SFW'
      }
    });
    const northRoute = await Route.findOne({
      where: {
        name: 'North'
      }
    })

    await queryInterface.bulkInsert('Companies',[
      {
        name: 'Seafood Wholesalers',
        address: "6060b Southwest Freeway, Houston, TX 77057",
        phoneNumber: "7136191969",
        longitude: -95.48655448,
        latitude: 29.72702631,
        createdAt: new Date(),
        updatedAt: new Date(),
        RouteId: sfwRoute.id
      },
      {
        name: "Fiesta 9", 
        address: "10401 Jensen Dr, Houston, TX 77093",
        phoneNumber: '7136970018', 
        longitude:  -95.33458395, 
        latitude: 29.86464048,
        createdAt: new Date(),
        updatedAt: new Date(), 
        RouteId: northRoute.id,
      },
      {
        name: "Fiesta 11", 
        address: "4711 Airline Dr, Houston, TX 77022",
        phoneNumber: '7136970050', 
        longitude: -95.38556490, 
        latitude:  29.83599731,
        createdAt: new Date(),
        updatedAt: new Date(),
        RouteId: northRoute.id, 
      }
    ]);

    const sfw = await Company.findOne({
      where: {
        name: 'Seafood Wholesalers'
      }
    });

    const f9 = await Company.findOne({
      where: {
        name: 'Fiesta 9'
      }
    });

    const f11 = await Company.findOne({
      where: {
        name: 'Fiesta 11'
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
        CompanyId: sfw.id,
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
        CompanyId: sfw.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Stephanie", 
        lastName: "De Leon", 
        email: 'sdeleon@email.com', 
        password: hashedPass, 
        CompanyId: f11.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Lily", 
        lastName: 'Cornelio', 
        email: 'lcornelio@email.com', 
        password: hashedPass, 
        CompanyId: f9.id,
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
