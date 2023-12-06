const Card = require('../models/cardModel');

const cardController = {
    getAllCards: async (req, res) => {
        try {
            const cards = await Card.find();
            res.json(cards);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    },

    // Implement the other controller methods here
};

module.exports = cardController;