const { info } = require('../core/logger.js');
const companies = require('../routes/companies.js');
const routes = require('../routes/routes.js');
const users = require('../routes/users.js');
const orders = require('../routes/orders.js');
const products = require('../routes/products.js');
const orderProducts = require('../routes/orderProducts.js');

module.exports = app => {
  app.use('/api/companies', companies);
  app.use('/api/routes', routes);
  app.use('/api/users', users);
  app.use('/api/orders', orders);
  app.use('/api/products', products);
  app.use('/api/order_products', orderProducts);
  info("YELLOW", 'API routes setup');
}

