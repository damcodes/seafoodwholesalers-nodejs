const express = require('express');
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('Fetching all products');
})

// GET /products/id
router.get('/:id', (req, res) => {
  res.send(`Fetching product with id: ${req.params.id}`)
})

// POST /products
router.post('/', (req, res) => {
  res.send('POSTing new product')
})

// PATCH /products/id
router.patch('/:id', (req, res) => {
  res.send(`PATCHing product with id: ${req.params.id}`)
})

// DELETE /products/id
router.delete('/:id', (req, res) => {
  res.send(`DELETE product with id: ${req.params.id}`)
})

module.exports = router;