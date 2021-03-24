const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');


// USER NEW ROUTE
router.get('/new', (req, res)=>{
    res.render('users/new.ejs',{ currentUser: req.session.currentUser})
})


// USER CREATE ROUTE
router.post('/', (req, res)=>{

    // hashing and salting the password
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    User.create(req.body, (err, createdUser)=>{
        if  (err){
            if (err.code===11000){
                res.send("<h1>An account with this username already exists.</h1> <br> <a href="/users/new">Try another username</a>")
            }
            else{
                res.send(err)
            }
        }
        else{
            res.send(createdUser)
        }
    })
})

module.exports = router;