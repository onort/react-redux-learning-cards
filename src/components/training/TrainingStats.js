import React, { PropTypes } from 'react';

const TrainingStats = (props) => {
  const { answers, currentCard: current, length } = props.info;
  const progressWidth = length > 0 ? (current / length) * 100 : 0;
  return (
    <div className="training-stats">
      <span className="stat correct">{answers.correct}</span>
      <span className="stat repeat">{answers.repeat}</span>
      <span className="stat wrong">{answers.wrong}</span>
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
