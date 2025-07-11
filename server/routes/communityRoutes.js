const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Create a new community
router.post('/', communityController.createCommunity);

// Get all communities
router.get('/', communityController.getAllCommunities);

// Get a single community by ID
router.get('/:id', communityController.getCommunityById);

// Update a community
router.put('/:id', communityController.updateCommunity);

// Delete a community
router.delete('/:id', communityController.deleteCommunity);

module.exports = router; 