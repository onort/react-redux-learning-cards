import React, { PropTypes } from 'react';

const AnswerCard = ({ card, handleMark }) => {
  const renderDefinitions = (definition, i) => {
    return (
      <div key={i} className="definition-container">
        <div className="word">
          <h3>{card.word}</h3>
          <span className="type">{definition.pos}</span>
        </div>
        <ol className="meanings">
          {definition.meanings.map((meaning, i) => <li key={i}>{meaning}</li>)}
        </ol>
      </div>
    );
  };

  return (
    <div className="card-container">
      <div className="card-body">
        {card.definitions.map(renderDefinitions)}
      </div>
      <div className="card-actions">
        <span className="action-text">How did it go?</span>
        <button className="action" onClick={() => handleMark(card, 1)}>
          <span className="icon correct"><i className="material-icons">done</i></span>
        </button>
        <button className="action" onClick={() => handleMark(card, 0)}>
          <span className="icon repeat"><i className="material-icons">repeat</i></span>
        </button>
        <button className="action" onClick={() => handleMark(card, -1)}>
          <span className="icon wrong"><i className="material-icons">clear</i></span>
        </button>
      </div>
    </div>
  );
};

AnswerCard.propTypes = {
  card: PropTypes.object,
  handleMark: PropTypes.func.isRequired
};

export default AnswerCard;
