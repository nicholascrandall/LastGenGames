require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const session = require('express-session')
const mongoose = require('mongoose');
const methodOverride = require('method-override')

//database
const mongoURI = process.env.MONGODBURI

const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log("db connection checked")
})

db.on('error', (err)=> { console.log('ERROR: ', err)});
db.on('connected', ()=> { console.log("mongo connected")})
db.on('disconnected', ()=> { console.log("mongo disconnected")})

//middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    next()
  })
app.use(session({
    secret: process.env.SECRET,
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
}))
const isAuthenticated = (req, res, next) => {
    console.log('her')
    if (req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}
//CONTROLLERS
const gameControllers = require('./controllers/games.js')
app.use('/games', gameControllers)

const merchControllers = require('./controllers/merch.js')
app.use('/merch', merchControllers)

const profileControllers = require('./controllers/profile.js')
app.use('/profile', profileControllers)

//home route
app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.listen(PORT,()=>{
    console.log('Server is listening');
})