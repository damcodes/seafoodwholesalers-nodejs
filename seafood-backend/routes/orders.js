const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/orders.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { info } = require('../core/logger.js');

// GET /orders
router.get('/', async (req, res) => {
  info("GREEN", "Start GET request for all orders");
  await OrdersController.index(res);
  info("GREEN", "Finish GET request for all orders");
})

// GET /orders/id
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start GET request for order with id: ${id}`);
  await OrdersController.show(id, res);
  info("GREEN", `Finish GET request for order with id: ${id}`);
})

// POST /orders
router.post('/', jsonParser, async (req, res) => {
  let body = req.body;
  info("GREEN", `Start POST request for new order: ${body.orderNumber}`);
  await OrdersController.create(body, res);
  info("GREEN", `Finish POST request for new order: ${body.orderNumber}`);
})

// PATCH /orders/id
router.patch('/:id', jsonParser, async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  info("GREEN", `Start PATCH request for order with id: ${id}`);
  await OrdersController.update(id, body, res);
  info("GREEN", `Finish PATCH request for order with id: ${id}`);
})

// DELETE /orders/id
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start DELETE request for order with id: ${id}`);
  await OrdersController.destroy(id, res);
  info("GREEN", `Finish DELETE request for order with id: ${id}`);
})

module.exports = router;