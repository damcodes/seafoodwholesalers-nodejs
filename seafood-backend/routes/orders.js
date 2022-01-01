const express = require('express');
const router = express.Router();

// GET /orders
router.get('/', (req, res) => {
  res.send('Fetching all orders');
})

// GET /orders/id
router.get('/:id', (req, res) => {
  res.send(`Fetching order with id: ${req.params.id}`)
})

// POST /orders
router.post('/', (req, res) => {
  res.send('POSTing new order')
})

// PATCH /orders/id
router.patch('/:id', (req, res) => {
  res.send(`PATCHing order with id: ${req.params.id}`)
})

// DELETE /orders/id
router.delete('/:id', (req, res) => {
  res.send(`DELETE order with id: ${req.params.id}`)
})

module.exports = router;