const express = require('express');
const router = express.Router();

const Merch = require('../models/merch')

router.get('/', (req, res) => {
    res.send('hey')
})

module.exports = router;