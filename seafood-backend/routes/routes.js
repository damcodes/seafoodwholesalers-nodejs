const express = require('express');
const router = express.Router();

// GET /routes
router.get('/', (req, res) => {
  res.send('Fetching all routes');
})

// GET /routes/id
router.get('/:id', (req, res) => {
  res.send(`Fetching route with id: ${req.params.id}`)
})

// POST /routes
router.post('/', (req, res) => {
  res.send('POSTing new route')
})

// PATCH /routes/id
router.patch('/:id', (req, res) => {
  res.send(`PATCHing route with id: ${req.params.id}`)
})

// DELETE /routes/id
router.delete('/:id', (req, res) => {
  res.send(`DELETE route with id: ${req.params.id}`)
})

module.exports = router;