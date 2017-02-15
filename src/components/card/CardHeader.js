import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const CardHeader = ({ title }) => {
  const handleFinish = () => {
    // Show a modal instead
    confirm('Are you sure that you want to finish your training?');
    browserHistory.push('/finished');
  };
  return (
    <div className="card-header">
      <h3>{title}</h3>
      <button className="finish-training" onClick={handleFinish}>
        <i className="material-icons">clear</i>
      </button>
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardHeader;
