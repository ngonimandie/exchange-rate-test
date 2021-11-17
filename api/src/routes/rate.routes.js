const express = require('express')
const router = express.Router()
const rateController = require('../controllers/rate.controller');

// Retrieve all rates
router.get('/', rateController.findAll);

// Create a new rate
router.post('/', rateController.create);

// Retrieve a single rate with id
router.get('/:id', rateController.findById);

// Retrieve a single rate with sku
router.get('/:date', rateController.findByDate);

// Update a rate with id
router.put('/:id', rateController.update);

// Delete a rate with id
router.delete('/:id', rateController.delete);

module.exports = router