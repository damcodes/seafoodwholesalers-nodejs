const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { info } = require('../core/logger.js');
const { route } = require('./users.js');

router.post('/', jsonParser, async (req, res) => {
  let user = req.body.user;
  info("GREEN", `Start POST request for Login for user: ${user.email}`);
  await LoginController.create(user, res);
  info("GREEN", `Finish POST request for Login for user: ${user.email}`);
});

module.exports = router;