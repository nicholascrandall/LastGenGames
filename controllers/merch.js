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

//merch seeding
router.get('/seed', (req, res) => {
    Merch.create([
        {
            name: "Last Gen Games Coffee Mug",
            description: "Love our store? Get your own LGG coffee mug to support us! Dishwasher safe.",
            img: "mug.png",
            price: 10,
            qty: 30,
        },
        {
            name: "Last Gen Games T-shirt",
            description: "Our LGG shirts are made with 100% cotton.  Machine washable, made in the USA.",
            img: "shirt.png",
            price: 20,
            qty: 15,
        },
        {
            name: "Last Gen Games GameCube Controller",
            description: "Includes SSBM notches for shield dropping and firefox angles. Guaranteed to have good dashback even without UCF.",
            img: "gcc.png",
            price: 245,
            qty: 2,
        },
    ], (err, data) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/merch')
    })
})


module.exports = router;