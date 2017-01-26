import React, { PropTypes } from 'react';

const TrainingStats = (props) => {
  const { correct, currentCard: current, length, repeat, wrong } = props.info;
  const progressWidth = length > 0 ? (current / length) * 100 : 0;
  return (
    <div className="training-stats">
      <span className="stat correct">{correct}</span>
      <span className="stat repeat">{repeat}</span>
      <span className="stat wrong">{wrong}</span>
      <div className="progress progress-bar">
        <div style={{width: `${progressWidth}%`}}></div>
      </div>
    </div>
  );
};

TrainingStats.propTypes = {
  info: PropTypes.object.isRequired
};

export default TrainingStats;