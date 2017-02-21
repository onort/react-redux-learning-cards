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
      <div className="card-body question-card"> 
        <p className="question">What is the meaning of the word
          <span className="word"> &#8220;{card.word}&#8221;?</span>
        </p>
      </div>
      <div className="card-actions">
        <button className="action" onClick={() => handleReveal()}>
          <span className="icon">
            <i className="material-icons">navigate_next</i>
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
