const express = require('express');
const musicController = require('../controllers/musicController');
const router = express.Router();

router.get('/', musicController.music);

module.exports = router;