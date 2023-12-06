const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rarity: {
        type: String,
        required: true,
        trim: true,
    },
    set: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    condition: {
        type: String,
        required: true,
        trim: true,
    },
    foil: {
        type: Boolean,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    notes: {
        type: String,
        required: false,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;