const { Route, Company } = require('../models');
const { error } = require('../core/logger.js');

module.exports = class RoutesController {

  // GET /routes
  static index = async (res) => {
    try {
      let options = {
        include: Company
      };
      const routes = await Route.findAll(options);
      return res.status(201).json({ routes })
    } catch(err) {
      error(`Routes#index error: ${err.message}`)
      return res.status(500).json({ error: err.message });
    }
  }

  // GET /routes/id
  static show = async (id, res) => {
    try {
      let options = {
        where: {
          id: id
        },
        include: Company
      };
      let route = await Route.findOne(options);
      return res.status(201).json({ route });
    } catch(err) {
      error(`Routes#show error: ${err.message}`)
      return res.status(500).json({ err: err.message });
    }
  }

  // POST /routes
  static create = async (body, res) => {
    try {
      let route = await Route.create(body);
      return res.status(201).json({ route });
    } catch(err) {
      error(`Routes#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /routes/id
  static update = async (id, body, res) => {
    try {
      let options = {
        where: { id },
        include: Company
      };
      await Route.update(body, options);
      let route = await Route.findOne(options);
      return res.status(201).json({ route });
    } catch(err) {
      error(`Routes#update error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /routes/id
  static destroy = async (id, res) => {
    try {
      let options = {
        where: {
          id: id
        }
      };
      await Route.destroy(options);
      let routes = await Route.findAll({ include: Company });
      return res.status(201).json({ routes });
    } catch(err) {
      error(`Routes#destroy error: ${err.messasge}`);
      return res.status(500).json({ error: err.message });
    }
  }
}