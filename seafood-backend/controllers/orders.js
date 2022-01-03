const { Order, User, Route } = require('../models');
const { error } = require('../core/logger.js');

module.exports = class OrdersController {

  // GET /orders 
  static index = async (res) => {
    try {
      let options = { include: [User, Route] };
      let orders = await Order.findAll(options);
      return res.status(201).json(orders);
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // GET /orders/id
  static show = async (id, res) => {
    try {
      let options = {
        where: { id },
        include: [User, Route]
      };
      let order = await Order.findOne(options);
      return res.status(201).json(order);
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // POST /orders 
  static create = async (body, res) => {
    try {
      let order = await Order.create(body, options);
      return res.status(201).json(order);
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /orders/id
  static update = async (id, body, res) => {
    try {
      let options = {
        where: { id },
        include: [User, Route]
      };
      await Order.update(body, options);
      let order = Order.findOne(options);
      return res.status(201).json(order);
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /orders/id
  static destroy = async (id, res) => {
    try {
      let options = {
        where: { id }
      };
      await Order.destroy(options);
      let orders = await Order.findAll({ include: [User, Route] });
      return res.status(201).json(orders);
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }
}