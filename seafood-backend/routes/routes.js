const express = require('express');
const router = express.Router();
const RoutesController = require('../controllers/routes.js');
const { info } = require('../core/logger.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// GET /routes
router.get('/', async (req, res) => {
  info("GREEN", "Start GET request for all routes");
  await RoutesController.index(res);
  info("GREEN", "Finish GET request for all routes");
})

// GET /routes/id
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start GET request for route with id: ${id}`);
  await RoutesController.show(id, res);
  info("GREEN", `Finish GET request for route with id: ${id}`);
})

// POST /routes
router.post('/', jsonParser, async (req, res) => {
  let body = req.body;
  info("GREEN", `Start POST request for new route: ${body.name}`);
  await RoutesController.create(body, res);
  info("GREEN", `Finish POST request for new route: ${body.name}`);
})

// PATCH /routes/id
router.patch('/:id', jsonParser, async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  info("GREEN", `Start PATCH request for route with id: ${id}`);
  await RoutesController.update(id, body, res);
  info("GREEN", `Finish PATCH request for route with id: ${id}`);
})

// DELETE /routes/id
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start DELETE request for route with id: ${id}`);
  await RoutesController.destroy(id, res);
  info("GREEN", `Finish DELETE request for route with id: ${id}`);
})

module.exports = router;