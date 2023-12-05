/* --------- Require our models ---------- */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

/* ------ Require the database connection ------ */
const db = require('./models')


/* -------- Require the routes from the controllers --------- */


/* -------- Create the express app -------- */ 
// we assign it to a variable so that we can use it 
const app = express()

/* ------- Middleware (app.use) ------ */
// cross origin allowance
app.use(cors())

// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// use the React build folder for static files
app.use(express.static(path.join(path,path.dirname(__dirname), 'frontend', 'dist')))

/* --------- Mount Routes ------------ */
// This tells our app to look at the controllers files



/* Tells the app to listen on the port */
app.listen(process.env.PORT, function(){
    console.log('Express is listening on port:', process.env.PORT)
})