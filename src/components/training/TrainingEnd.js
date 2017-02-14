import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TrainingEnd extends Component {
  constructor(props) {
    super(props);
    this.getPercentage = this.getPercentage.bind(this);
  }

  getPercentage(amount) {
    const { length } = this.props.info;
    if(length > 1) return (amount / length).toFixed(3) * 100;
    return 0;
  }

  render() {
  const { correct, wrong, repeat } = this.props.info.answers;
  const info = this.props.info;
    return (
      <div className="card-container">
        <h3>Done!</h3>
        <div className="end-stats">
          <p>Correct: {correct} <span className="percentage">{this.getPercentage(correct)}%</span></p>
          <p>Needs repeating: {repeat} <span className="percentage">{this.getPercentage(repeat)}%</span></p>
          <p>Wrong: {wrong} <span className="percentage">{this.getPercentage(wrong)}%</span></p>
        </div>
      </div>
    );
  }
}

TrainingEnd.propTypes = {
  info: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    info: state.info
  };
}

export default connect(mapStateToProps)(TrainingEnd);
