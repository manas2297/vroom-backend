const express = require('express');
const { createRoom } = require('../controller/room.controller');
// const routes = require('.');
const router = express.Router();

router.post('/createRoom', createRoom);

module.exports = router;