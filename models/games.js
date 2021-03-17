const mongoose = require('mongoose')
const {Schema, model} = mongoose

const gameSchema= new Schema({
    name: {type: String, required: true},
    platform: String,
    description: String,
    img: String,
    price: {type: Number, min: 0, default: 0},
    qty: {type: Number, min: 0, default: 0},
});

const Game = model('Game', gameSchema)

module.exports = Game;