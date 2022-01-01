const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const UsersController = require('../controllers/users.js');

const jsonParser = bodyParser.json();
// GET /users
router.get('/', (req, res) => {
  UsersController.index(res);
})

// GET /users/id
router.get('/:id', (req, res) => {
  UsersController.show(req.params.id, res);
})

// POST /users
router.post('/', jsonParser, (req, res) => {
  UsersController.create(req.body, res);
})

// PATCH /users/id
router.patch('/:id', jsonParser, (req, res) => {
  UsersController.update(req.params.id, req.body, res);
})

// DELETE /users/id
router.delete('/:id', (req, res) => {
  UsersController.destroy(req.params.id, res);
})

module.exports = router;