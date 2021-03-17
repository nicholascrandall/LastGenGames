const express = require('express');
const router = express.Router();

const Game = require('../models/games')

router.get('/', (req, res) => {
    res.send('hey')
})

module.exports = router;