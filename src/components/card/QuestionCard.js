import React, { PropTypes } from 'react';

import CardHeader from './CardHeader';

const QuestionCard = ({ card, handleReveal }) => {
  return (
    <div className="card-container">
      <CardHeader title="Oxford 3000" />
      <div className="card-body"> 
        <h3 className="question"><small>What is the meaning of </small><br /> {card.word}?</h3>
      </div>
      <div className="card-actions">
        <button className="lc-button-inverted reveal" onClick={() => handleReveal()}>
          <i className="material-icons">speaker_notes</i>
        </button>
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  card: PropTypes.object,
  handleReveal: PropTypes.func.isRequired
};

export default QuestionCard;
