const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users')

// USER NEW ROUTE
router.get('/new', (req, res) => {
    res.render('./sessions/new.ejs', { currentUser: req.session.currentUser})
})

// USER LOGIN ROUTE (CREATE SESSION ROUTE)
router.post('/', (req, res) => {

    User.findOne({ username: req.body.username}, (err, foundUser) => {
        if (err) {
                res.send(err)
        }
        else {

            if (foundUser){
                console.log(foundUser)

                if (bcrypt.compareSync(req.body.password, foundUser.password)){
                    //login user and create session
                    req.session.currentUser = foundUser

                    res.redirect('/')

                }
                else{
                    res.send("<h1>invalid password</h1>")
                }    

            }
            else{
                res.send("<h1>This username does not exist.</h1> <br> <a href='/users/new'>Register an account here</a>")
            }
        }
    })
})


router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})


module.exports = router;