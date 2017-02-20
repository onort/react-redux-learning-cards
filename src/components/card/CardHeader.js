import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

const CardHeader = () => {
  const handleFinish = () => {
    // Show a modal instead
    confirm('Are you sure that you want to finish your training?');
    browserHistory.push('/finished');
  };
  return (
    <div>
      <div className="card-header">
        <span className="end-train" onClick={handleFinish}>
          <i className="material-icons">clear</i>
        </span>
      </div>
      <div className="clearfix" />
    </div>
  );
};

export default CardHeader;
