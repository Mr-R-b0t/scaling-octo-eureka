const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!

const post_controller = require('../controllers/post.controller.js');

router.get('/test', post_controller.getALL);

module.exports = router;

