const { User } = require('../models');
const { error } = require('../core/logger.js');
const jwt = require('jsonwebtoken');

module.exports = class LoginController {
  
  // POST /login
  static create = async (user, res) => {
    try {
      let { email, password } = user;

      if (!(email && password)) {
        return res.status(400).json({ error: "Email AND password required" });
      }

      let options = {
        where: { email },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      };
      let confirmedUser = await User.findOne(options);
      if (confirmedUser && await confirmedUser.authenticate(password)) {
        let token = jwt.sign({userId: user.id}, 'aPP-s3cr3t');
        return res.status(201).json({ jwt: token, user: confirmedUser})
      } else {
        return res.status(401).json({ message: "Incorrect email or password" });
      }
    } catch(err) {
      error(`Login#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }
}