require('dotenv').config
const express = require('express')
const app = express()
const PORT = process.env.PORT
const session = require('express-session')




app.listen(PORT,()=>{
    console.log('Server is listening');
})