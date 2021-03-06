const { User, Company, Order } = require('../models');
const { error } = require('../core/logger.js');
const jwt = require('jsonwebtoken');

module.exports = class UsersController {

  // GET /users
  static index = async (res) => {
    try {
      const options = {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: [Company, Order]
      }
      const users = await User.findAll(options);
      return res.status(201).json(users)
    } catch(err) {
      error(`Users#index error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  } 

  // GET /users/id
  static show = async (id, res) => {
    try {
      const options = {
        where: {
          id: id
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: [Company, Order]
      }
      const user = await User.findOne(options);
      return res.status(201).json(user)
    } catch(err) {
      error(`Users#show error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // GET /users/current-user
  static currentUser = async (req, res) => {
    try {
      const auth = req.headers.authorization;
      if (auth) {
        const decodedPayload = jwt.verify(auth, 'aPP-s3cr3t');
        const { id, email } = decodedPayload;
        const options = {
          where: { id, email },
          include: [Company, Order] 
        };
        const user = await User.findOne(options);
        return res.status(201).json(user);
      }
      return res.status(401).json({ message: "Authenticatin failed. Must be signed in." });
    } catch(err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // POST /users
  static create = async (body, res) => {
    try {
      const options = {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      }
      const user = await User.create(body, options);
      return res.status(201).json(user);
    } catch (err) {
      error(`Users#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /users/id
  static update = async (id, body, res) => {
    try {
      const options = {
        where: {
          id: id
        },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        include: [Company, Order]
      }
      let user = await User.findOne(options);
      await user.update(body, options); // must use User instance to avoid bulkInsert call from class method User.update so password will be hashed 
      user = await User.findOne(options);
      return res.status(201).json(user);
    } catch(err) {
      error(`Users#update error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /users/id
  static destroy = async (id, res) => {
    try {
      const options = {
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
        include: [Company, Order]
      }
      const users = await User.findAll(options);
      return res.status(201).json(users);
    } catch(err) {
      error(`Users#destroy error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }
}
