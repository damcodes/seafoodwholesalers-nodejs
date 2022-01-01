const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const CompaniesController = require('../controllers/companies.js');

const jsonParser = bodyParser.json();
// GET /companies
router.get('/', (req, res) => {
  CompaniesController.index(res);
})

// GET /companies/id
router.get('/:id', (req, res) => {
  CompaniesController.show(req.params.id, res);
})

// POST /companies
router.post('/', jsonParser, (req, res) => {
  CompaniesController.create(req.body, res);
})

// PATCH /companies/id
router.patch('/:id', jsonParser, (req, res) => {
  CompaniesController.update(req.params.id, req.body, res);
})

// DELETE /companies/id
router.delete('/:id', (req, res) => {
  CompaniesController.destroy(req.params.id, res);
})

module.exports = router;