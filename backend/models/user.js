const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
        },
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
        },
    ],
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);

module.exports = User;
