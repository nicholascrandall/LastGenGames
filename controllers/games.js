const express = require('express');
const router = express.Router();

const Game = require('../models/games')

router.get('/', (req, res) => {
   Game.find({}, (err, foundGames, next) => {
       if(err) {
           console.log(err);
           next(err)
       } else {
           res.render('index.ejs', {
               games: foundGames
           })
       }
   })
})


//games seeding
router.get('/seed', (req, res) => {
    Game.create([
        {
            name: "The Legend of Zelda: Ocarina of Time",
            platform: "N64",
            description: "Critically acclaimed action-adventure game where the player controls Link on a quest to stop the evil king Ganondorf.",
            year: 1998,
            img: "OOT.jpeg",
            price: 40,
            qty: 3,
        },
        {
            name: "Spyro the Dragon",
            platform: "PS1",
            description: "The first game in the Spyro series, it stars the title character, a young purple dragon named Spyro, and his dragonfly friend, Sparx, who must journey across the Dragon Kingdom to defeat Gnasty Gnorc.",
            year: 1998,
            img: "Spyro_the_Dragon.jpg",
            price: 30,
            qty: 1,
        },
        {
            name: "Super Mario Sunshine",
            platform: "GameCube",
            description: "A villain resembling Mario, known as Shadow Mario, vandalizes Isle Delfino with graffiti and leaves Mario to be wrongfully convicted for the mess. Mario is ordered to clean up Isle Delfino, using a device called the Flash Liquidizer Ultra Dousing Device (F.L.U.D.D.), while saving Princess Peach from Shadow Mario.",
            year: 2002,
            img: "Super_mario_sunshine.jpg",
            price: 20,
            qty: 0,
        }
    ], (err, data) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/games')
    })
})


module.exports = router;