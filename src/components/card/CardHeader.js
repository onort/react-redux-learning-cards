import React, { PropTypes } from 'react';

const CardHeader = ({ title }) => {
  return (
    <div className="card-header">
      <h3>{title}</h3>
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardHeader;
