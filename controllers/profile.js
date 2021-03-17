const express = require('express');
const router = express.Router();

const Profile = require('../models/profile')

router.get('/', (req, res) => {
    res.send('hey')
})

module.exports = router;