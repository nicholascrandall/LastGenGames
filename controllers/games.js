const express = require('express');
const router = express.Router();

const Game = require('../models/games')

//games index
router.get('/', (req, res) => {
   Game.find({}, (err, foundGames, next) => {
       if(err) {
           console.log(err);
           next(err)
       } else {
           res.render('index.ejs', {
               games: foundGames,
           })
       }
   })
})

//new game
router.get('/new', (req, res) => {
    res.render('new.ejs')
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
            user: false,
        },
        {
            name: "Spyro the Dragon",
            platform: "PS1",
            description: "The first game in the Spyro series, it stars the title character, a young purple dragon named Spyro, and his dragonfly friend, Sparx, who must journey across the Dragon Kingdom to defeat Gnasty Gnorc.",
            year: 1998,
            img: "Spyro_the_Dragon.jpg",
            price: 30,
            qty: 1,
            user: false,
        },
        {
            name: "Super Mario Sunshine",
            platform: "GameCube",
            description: "A villain resembling Mario, known as Shadow Mario, vandalizes Isle Delfino with graffiti and leaves Mario to be wrongfully convicted for the mess. Mario is ordered to clean up Isle Delfino, using a device called the Flash Liquidizer Ultra Dousing Device (F.L.U.D.D.), while saving Princess Peach from Shadow Mario.",
            year: 2002,
            img: "Super_mario_sunshine.jpg",
            price: 20,
            qty: 0,
            user: false,
        }
    ], (err, data) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/games')
    })
})

//games show
router.get('/:id', (req, res) => {
    Game.findById(req.params.id, (err, foundGame) => {
        res.render('show.ejs', {
            game: foundGame,
        })
    })
})

//games POST
router.post('/', (req, res) => {
    Game.create(req.body, (err, createdGame) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(createdGame);
            res.redirect('/games')
        }
    })
})

//DELETE game
router.delete('/:id', (req, res) => {
    Game.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            res.redirect('/games')
        }
    })
})

//EDIT game
router.get('/:id/edit', (req, res) => {
    Game.findById(req.params.id, (err, foundGame) => {
        res.render('edit.ejs', {
            game: foundGame
        })
    })
})

//UPDATE game
router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGame) => {
        res.redirect('/games')
    })
})

module.exports = router;