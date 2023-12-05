/* Require the models */
const jwt = require('jwt-simple')
const express = require('express')

// Router allows us to handle routing outside of Server.js
const router = express.Router()

/* Require the db and connection*/

const db = require('../models')

/* Require the JWT config */
const config = require('../../jwt.config.js')

/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    // Check if the 'Authorization' header is present and has the token
    const token = req.headers.authorization;
    if (token) {
        try {
            // Decode the token using the secret key and add the decoded payload to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            console.log('Decoded Token:', decodedToken);
            req.user = decodedToken;
            next();
        } catch (err) {
            // Return an error if the token is invalid
            console.error('Error decoding token:', err);
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Return an error if the 'Authorization' header is missing or has the wrong format
        console.error('Token not present in headers');
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

router.get('/', function(req, res){
    db.Tweet.find({})
        .then(tweets => res.json(tweets))
})

router.post('/', authMiddleware, (req, res) => {
    db.Tweet.create({
        ...req.body,
        userId: req.user.id
    })
    .then(tweet => res.json(tweet))
})


module.exports = router