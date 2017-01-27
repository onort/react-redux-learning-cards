import React, { PropTypes } from 'react';

const QuestionBody = ({ card, handleReveal }) => {
  return (
    <div className="card-body"> 
      <h3 className="question"><small>What is the meaning of </small><br /> {card.word}?</h3>
      <div className="card-actions">
        <button className="lc-button-inverted reveal" onClick={() => handleReveal()}>
          <i className="material-icons">speaker_notes</i>
        </button>
      </div>
    </div>
  );
};

QuestionBody.propTypes = {
  card: PropTypes.object.isRequired,
  handleReveal: PropTypes.func.isRequired
};

export default QuestionBody;
