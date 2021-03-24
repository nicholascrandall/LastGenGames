const express = require('express');
const router = express.Router();

const Profile = require('../models/profile')

//profile page
router.get('/', (req, res) => {
    res.render('./profile/profile.ejs', {
        currentUser: req.session.currentUser
    })
})

module.exports = router;