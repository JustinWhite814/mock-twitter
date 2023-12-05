const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true,
        trim: true, // Remove leading/trailing whitespaces
        maxlength: 280, // Example: Tweets have a character limit
        
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    retweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    hashtags: [String],
}, {timestamps: true}

)

const Tweet = mongoose.model("Tweet", TweetSchema)

module.exports = Tweet;