/* --------- Require our models ---------- */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

/* ------ Require the database connection ------ */
const db = require('./models')


/* -------- Require the routes from the controllers --------- */
const tweetCtrl = require('./controllers/tweets')
const userCtrl = require('./controllers/users')
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
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))

/* --------- Mount Routes ------------ */
// This tells our app to look at the controllers files
app.use('/api/tweets', tweetCtrl)
app.use('/api/users', userCtrl)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
// });

/* Tells the app to listen on the port */
app.listen(process.env.PORT, function(){
    console.log('Express is listening on port:', process.env.PORT)
})