const express = require('express');
const router = express.Router();

// GET /order_products
router.get('/', (req, res) => {
  res.send('Fetching all order_products');
})

// GET /order_products/id
router.get('/:id', (req, res) => {
  res.send(`Fetching order_product with id: ${req.params.id}`)
})

// POST /order_products
router.post('/', (req, res) => {
  res.send('POSTing new order_product')
})

// PATCH /order_products/id
router.patch('/:id', (req, res) => {
  res.send(`PATCHing order_product with id: ${req.params.id}`)
})

// DELETE /order_products/id
router.delete('/:id', (req, res) => {
  res.send(`DELETE order_product with id: ${req.params.id}`)
})

module.exports = router;