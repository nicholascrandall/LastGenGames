const express = require('express');
const router = express.Router();
const Profile = require('../models/profile')

//profile page
router.get('/:username', (req, res) => {
    Profile.findOne({username: req.params.username}, (err, foundProfile) => {
        res.render('./profile/profile.ejs', {
            currentUser: req.session.currentUser,
            user: foundProfile
        })
    })
})

module.exports = router;