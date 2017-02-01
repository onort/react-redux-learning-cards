import React, { PropTypes } from 'react';

const TrainingEnd = ({ info }) => {
  const { correct, wrong, repeat } = info.answers;
  return (
    <div>
      <h3>Done!</h3>
      <h5>Correct: {correct}</h5>
      <h5>Needs reapting: {repeat}</h5>
      <h5>Wrong: {wrong}</h5>
    </div>
  );
};

TrainingEnd.propTypes = {
  info: PropTypes.object.isRequired
};

export default TrainingEnd;
