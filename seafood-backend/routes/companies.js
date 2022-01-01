const express = require('express');
const router = express.Router();

// GET /companies
router.get('/', (req, res) => {
  res.send('Fetching all companies');
})

// GET /companies/id
router.get('/:id', (req, res) => {
  res.send(`Fetching company with id: ${req.params.id}`)
})

// POST /companies
router.post('/', (req, res) => {
  res.send('POSTing new company')
})

// PATCH /companies/id
router.patch('/:id', (req, res) => {
  res.send(`PATCHing company with id: ${req.params.id}`)
})

// DELETE /companies/id
router.delete('/:id', (req, res) => {
  res.send(`DELETE company with id: ${req.params.id}`)
})

module.exports = router;