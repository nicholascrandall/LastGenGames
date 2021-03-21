const express = require('express');
const router = express.Router();

const Merch = require('../models/merch')

//merch index
router.get('/', (req, res) => {
    Merch.find({}, (err, foundMerch, next) => {
        if(err) {
            console.log(err);
            next(err)
        } else {
            res.render('./merch/index.ejs', {
                merch: foundMerch,
            })
        }
    })
 })

module.exports = router;