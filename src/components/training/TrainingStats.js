import React, { PropTypes } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const TrainingStats = (props) => {
  const { correct, currentCard: current, length, repeat, wrong } = props.info;
  const progressWidth = length > 0 ? (current / length) * 100 : 0;
  const percentages = {
    correct: calculatePercentage(correct, current) || 0,
    repeat: calculatePercentage(repeat, current) || 0,
    wrong: calculatePercentage(wrong, current) || 0
  };
  function calculatePercentage(amount, length) {
    return Math.round((amount / length) * 100);
  }
  
  return (
    <section className="info">
      <ul className="stats">
        <li><div className="stat correct">
          <CircularProgressbar percentage={percentages.correct} />
        </div></li>
        <li><div className="stat repeat">
          <CircularProgressbar percentage={percentages.repeat} />
        </div></li>
        <li><div className="stat wrong">
          <CircularProgressbar percentage={percentages.wrong} />
        </div></li>
      </ul>
      <div className="progress progress-bar">
        <div style={{width: `${progressWidth}%`}} />
      </div>
    </section>
  );
};

TrainingStats.propTypes = {
  info: PropTypes.object.isRequired
};

export default TrainingStats;
