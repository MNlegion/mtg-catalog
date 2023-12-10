// Deck model is a collection of cards


const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cards: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Deck', deckSchema);