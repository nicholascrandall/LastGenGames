const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Profile = require('../models/profile')

//profile page
router.get('/:username', (req, res) => {
    User.findOne({username: req.params.username})
    res.render('./profile/profile.ejs', {
        currentUser: req.session.currentUser
    })
})

module.exports = router;