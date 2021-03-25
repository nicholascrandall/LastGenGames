const mongoose = require('mongoose')
const {Schema, model} = mongoose

const profileSchema= new Schema({
    username: {type: String, required: true},
    about: {type: String, default: ""},
    avatar: {type: String, default: ""},
    birthday: {type: String, default: "01/01/2000"}
});

const Profile = model('Profile', profileSchema)

module.exports = Profile;