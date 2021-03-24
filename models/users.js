const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {type: String, required:true, unique:true},
    password: String,
})

const User = model('User', userSchema)

module.exports = User;