import React, { PropTypes } from 'react';
import { browserHistory, withRouter } from 'react-router';

import CardHeader from './CardHeader';

const QuestionCard = ({ card, handleReveal }) => {
  const handleFinish = () => {
    // Show a modal instead
    confirm('Are you sure that you want to finish your training?');
    browserHistory.push('/finished');
  };
  return (
    <div className="card-container">
      <CardHeader title="Oxford 3000" />
      <div className="card-body"> 
        <h3 className="question"><small>What is the meaning of </small><br /> {card.word}?</h3>
      </div>
      <div className="card-actions">
        <h4>Show Definition</h4>
        <button className="button-inverted reveal" onClick={() => handleReveal()}>
          <i className="material-icons">redo</i>
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
