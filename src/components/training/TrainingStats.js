import React, { PropTypes } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const TrainingStats = (props) => {
  const { answers, currentCard: current, length } = props.info;
  const progressWidth = length > 0 ? (current / length) * 100 : 0;
  const percentages = {
    correct: calculatePercentage(answers.correct, current) || 0,
    repeat: calculatePercentage(answers.repeat, current) || 0,
    wrong: calculatePercentage(answers.wrong, current) || 0
  };
  function calculatePercentage(amount, length) {
    return Math.round((amount / length) * 100)
  };
  
  return (
    <div className="training-stats">
    <div className="stat correct">
      <CircularProgressbar percentage={percentages.correct} />
    </div>
    <div className="stat repeat">
      <CircularProgressbar percentage={percentages.repeat} />
    </div>
    <div className="stat wrong">
      <CircularProgressbar percentage={percentages.wrong} />
    </div>
      <div className="progress progress-bar">
        <div style={{width: `${progressWidth}%`}} />
      </div>
    </div>
  );
};

TrainingStats.propTypes = {
  info: PropTypes.object.isRequired
};

export default TrainingStats;
