const mongoose = require('mongoose')
const {Schema, model} = mongoose

const profileSchema= new Schema({
    username: {type: String, required: true},
    about: {type: String, default: ""},
    avatar: {type: String, default: "https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"},
    birthday: {type: String, default: "01/01/2000"}
});

const Profile = model('Profile', profileSchema)

module.exports = Profile;