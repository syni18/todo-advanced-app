import React, { useState } from "react";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([
      ...cards,
      {
        title: `Card ${cards.length + 1}`,
        description: `Description for card ${cards.length + 1}`,
      },
    ]);
  };

  return (
    <div className="card-list">
      <button onClick={addCard}>Add Card</button>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
