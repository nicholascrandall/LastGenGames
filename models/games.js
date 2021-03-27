const mongoose = require('mongoose')
const {Schema, model} = mongoose

const gameSchema= new Schema({
    name: {type: String, required: true},
    platform: String,
    description: String,
    year: Number,
    img: {type: String, default: "defaultgame.png"},
    price: {type: Number, min: 0, default: 0},
    qty: {type: Number, min: 0, default: 1},
    user: {type: Boolean, default: true}
});

const Game = model('Game', gameSchema)

module.exports = Game;