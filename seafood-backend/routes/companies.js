const express = require('express');
const router = express.Router();
const CompaniesController = require('../controllers/companies.js');
const { info } = require('../core/logger.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// GET /companies
router.get('/', async (req, res) => {
  info("GREEN", 'Start GET request for all companies');
  await CompaniesController.index(res);
  info("GREEN", 'Finish GET request for all companies')
})

// GET /companies/id
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start GET request for company with id: ${id}`);
  await CompaniesController.show(req.params.id, res);
  info("GREEN", `Finish GET request for company with id: ${id}`);
})

// POST /companies
router.post('/', jsonParser, async (req, res) => {
  let body = req.body;
  info("GREEN", `Start POST request for new company: ${body.name}`);
  await CompaniesController.create(req.body, res);
  info("GREEN", `Finish POST request for new company: ${body.name}`);
})

// PATCH /companies/id
router.patch('/:id', jsonParser, async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  info("GREEN", `Start PATCH request for company with id: ${id}`);
  await CompaniesController.update(id, body, res);
  info("GREEN", `Finish PATCH request for company with id: ${id}`);
})

// DELETE /companies/id
router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  info("GREEN", `Start DELETE request for company with id: ${id}`);  
  await CompaniesController.destroy(req.params.id, res);
  info("GREEN", `Finish DELETE request for company with id: ${id}`);
})

module.exports = router;