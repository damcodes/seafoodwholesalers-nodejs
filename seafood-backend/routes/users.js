const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { info } = require('../core/logger.js');

// GET /users
router.get('/', async (req, res) => {
  info("GREEN", 'Start GET request for all users');
  await UsersController.index(res);
  info("GREEN", 'Finish GET request for all users');
})

// GET /users/id
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start GET request for user with id: ${id}`);
  UsersController.show(id, res);
  info("GREEN", `Finish GET request for user with id: ${id}`);
})

// POST /users
router.post('/', jsonParser, async (req, res) => {
  let body = req.body;
  info("GREEN", `Start POST request for new user: ${body.firstName} ${body.lastName}`);
  await UsersController.create(body, res);
  info("GREEN", `Finish POST request for new user: ${body.firstName} ${body.lastName}`);
})

// PATCH /users/id
router.patch('/:id', jsonParser, async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  info("GREEN", `Start PATCH request for user with id: ${id}`);
  await UsersController.update(id, body, res);
  info("GREEN", `Finish PATCH for user with id: ${id}`);
})

// DELETE /users/id
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start DELETE request for user with id: ${id}`);  
  UsersController.destroy(req.params.id, res);
  info("GREEN", `Finish DELETE request for user with id: ${id}`);
})

module.exports = router;