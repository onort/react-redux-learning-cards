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
    <section className="card-container">
      <CardHeader />
      <div className="card-body"> 
        <p className="question">What is the meaning of 
          <span className="word"> {card.word}?</span>
        </p>
      </div>
      <div className="card-actions">
        <button className="action" onClick={() => handleReveal()}>
          <span className="icon">
            <i className="material-icons">redo</i>
          </span>
        </button>
      </div>
    </section>
  );
};

QuestionCard.propTypes = {
  card: PropTypes.object,
  handleReveal: PropTypes.func.isRequired
};

export default QuestionCard;
