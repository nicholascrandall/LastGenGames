const mongoose = require('mongoose')
const {Schema, model} = mongoose

const profileSchema= new Schema({
    name: {type: String, required: true},
    about: String,
    avatar: String, //image URL
    birthday: Date,
    password: String,
});

const Profile = model('Profile', profileSchema)

module.exports = Profile;