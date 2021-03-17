const mongoose = require('mongoose')
const {Schema, model} = mongoose

const merchSchema= new Schema({
    name: {type: String, required: true},
    description: String,
    img: String,
    price: {type: Number, min: 0, default: 0},
    qty: {type: Number, min: 0, default: 0},
});

const Merch = model('Merch', merchSchema)

module.exports = Merch;