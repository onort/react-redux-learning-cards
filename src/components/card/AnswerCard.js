import React, { PropTypes } from 'react';

const AnswerCard = ({ card, handleMark }) => {
  const renderDefinitions = (definition, i) => {
    return (
      <div key={i}>
        <h3 className="word-definition">{card.word} <span className="card-type">({definition.pos})</span></h3> 
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
        <h4>How did it go?</h4>
        <button className="lc-button-inverted correct" onClick={() => handleMark(card, 1)}><i className="material-icons">done</i></button>
        <button className="lc-button-inverted repeat" onClick={() => handleMark(card, 0)}><i className="material-icons">cached</i></button>
        <button className="lc-button-inverted wrong" onClick={() => handleMark(card, -1)}><i className="material-icons">clear</i></button>
      </div>
    </div>
  );
};

AnswerCard.propTypes = {
  card: PropTypes.object.isRequired,
  handleMark: PropTypes.func.isRequired
};

export default AnswerCard;
