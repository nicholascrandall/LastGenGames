const express = require('express');
const router = express.Router();
const Profile = require('../models/profile')

//profile route
router.get('/:username', (req, res) => {
    Profile.findOne({username: req.params.username}, (err, foundProfile) => {
        res.render('./profile/profile.ejs', {
            currentUser: req.session.currentUser,
            user: foundProfile
        })
    })
})

//profile POST
router.post('/', (req, res) => {
    Profile.create(req.body, (err, createdProfile) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(createdProfile);
            res.redirect(`/profile/${req.params.username}`)
        }
    })
})

//EDIT profile
router.get('/:username/edit', (req, res) => {
    Profile.findOne({username: req.params.username}, (err, foundProfile) => {
        res.render('./profile/edit.ejs', {
            user: foundProfile,
            currentUser: req.session.currentUser
        })
    })
})


//UPDATE profile
router.put('/:username', (req, res, next) => {
    Profile.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, (err, updatedProfile) => {
        if (err) {
            console.log("Error on update route:");
            console.log(err);
            next(err)
        } else {
            res.redirect(`/profile/${req.params.username}`)
        }
    })
})

module.exports = router;