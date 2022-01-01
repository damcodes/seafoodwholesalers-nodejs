const { User, Company } = require('../models');
const { info, error } = require('../core/logger.js');

module.exports = class UsersController {

  // GET /users
  static index = async (res) => {
    try {
      info("GREEN", 'GET request for all users');
      let options = {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: Company
      }
      let users = await User.findAll(options);
      return res.status(201).json({ users })
    } catch(err) {
      error(`Users#index error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  } 

  // GET /users/id
  static show = async (id, res) => {
    try {
      info("GREEN", `GET request for user with id: ${id}`);
      let options = {
        where: {
          id: id
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: Company
      }
      let user = await User.findOne(options);
      return res.status(201).json({ user })
    } catch(err) {
      error(`Users#show error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // POST /users
  static create = async (body, res) => {
    try {
      info("GREEN", `POST request for new user: ${body.firstName} ${body.lastName}`);
      let options = {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      }
      let user = await User.create(body, options);
      return res.status(201).json({ user });
    } catch (err) {
      error(`Users#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /users/id
  static update = async (id, body, res) => {
    try {
      info("GREEN", `PATCH request for user with id: ${id}`);
      let options = {
        where: {
          id: id
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: Company
      }
      let user = await User.findOne(options);
      await user.update(body, options);
      user = await User.findOne(options);
      return res.status(201).json({ user });
    } catch(err) {
      error(`Users#update error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /users/id
  static destroy = async (id, res) => {
    try {
      info("GREEN", `DELETE request for user with id: ${id}`);
      let options = {
        where: {
          id: id
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      }
      let user = await User.findOne(options);
      await user.destroy(options);
      options = {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: Company
      }
      let users = await User.findAll(options);
      return res.status(201).json({ users });
    } catch(err) {
      error(`Users#destroy error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }
}
