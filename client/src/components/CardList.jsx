// src/components/CardList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch cards from your backend API
    axios.get('http://localhost:3001/api/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  return (
    <div>
      <h2>Card List</h2>
      <ul>
        {cards.map((card) => (
          <li key={card._id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;

