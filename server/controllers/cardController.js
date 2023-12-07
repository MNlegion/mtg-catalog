const Card = require("../models/cardModel");

const cardController = {
  getAllCards: async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCardById: async (req, res) => {
    const { id } = req.params;
    try {
      const card = await Card.findById(id);
      if (!card) {
        return res.status(404).json({ message: "Card not found" });
      }
      res.json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createCard: async (req, res) => {
    const { name, set, rarity, quantity, condition, foil, price, notes, date } =
      req.body;

    try {
      const newCard = new Card({
        name,
        rarity,
        set,
        quantity,
        condition,
        foil,
        price,
        notes,
        date,
      });

      const savedCard = await newCard.save();
      res.status(201).json(savedCard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateCard: async (req, res) => {
    const { id } = req.params;
    const { name, set, rarity, quantity, condition, foil, price, notes, date } =
      req.body;

    try {
      const updatedCard = await Card.findByIdAndUpdate(
        id,
        { name, set, rarity, quantity, condition, foil, price, notes, date },
        { new: true } // Return the updated card
      );

      if (!updatedCard) {
        return res.status(404).json({ message: "Card not found" });
      }

      res.json(updatedCard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteCard: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedCard = await Card.findByIdAndDelete(id);

      if (!deletedCard) {
        return res.status(404).json({ message: "Card not found" });
      }

      res.json({ message: "Card deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = cardController;
