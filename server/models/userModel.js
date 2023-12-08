const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    passwordHash: {
        type: String,
        required: true,
        trim: true,
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
    }],
    decks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck',
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;