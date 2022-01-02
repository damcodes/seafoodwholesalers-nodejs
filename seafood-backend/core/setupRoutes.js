const cors = require('cors');
const { info } = require('../core/logger.js');
const companies = require('../routes/companies.js');
const routes = require('../routes/routes.js');
const users = require('../routes/users.js');
const orders = require('../routes/orders.js');
const products = require('../routes/products.js');
const orderProducts = require('../routes/orderProducts.js');
const login = require('../routes/login.js');

module.exports = app => {
  let options = {
    origin: 'http://localhost:3000'
  }
  app.use(cors(options));
  app.use('/api/companies', companies);
  app.use('/api/routes', routes);
  app.use('/api/users', users);
  app.use('/api/orders', orders);
  app.use('/api/products', products);
  app.use('/api/order_products', orderProducts);
  app.use('/api/login', login);
  info("YELLOW", 'API routes setup');
}

