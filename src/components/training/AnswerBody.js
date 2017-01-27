import React, { PropTypes } from 'react';

const AnswerBody = ({ card, handleMark }) => {

  return (
    <div className="card-body">
      <h3>{card.word} <span className="card-type">({card.type})</span></h3>
      <ol className="meanings">
        {card.meanings.map((meaning, i) => <li key={i}>{meaning}</li> )}
      </ol>
      <div className="card-actions">
        <h4>How did it go?</h4>
        <button className="lc-button-inverted correct" onClick={() => handleMark(1)}><i className="material-icons">done</i></button>
        <button className="lc-button-inverted repeat" onClick={() => handleMark(0)}><i className="material-icons">cached</i></button>
        <button className="lc-button-inverted wrong" onClick={() => handleMark(-1)}><i className="material-icons">clear</i></button>
      </div>
    </div>
  );
};

AnswerBody.propTypes = {
  card: PropTypes.object.isRequired,
  handleMark: PropTypes.func.isRequired
};

export default AnswerBody;
