import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetData } from '../../actions/dataActions';

class TrainingEnd extends Component {
  constructor(props) {
    super(props);
    this.getPercentage = this.getPercentage.bind(this);
  }

  componentWillUnmount() {
    this.props.resetCards();
  }

  getPercentage(amount) {
    const { currentCard } = this.props.info;
    if(currentCard > 1) return ((amount / currentCard) * 100).toFixed(1);
    return 0;
  }

  render() {
  const { correct, wrong, repeat } = this.props.info;
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
  info: PropTypes.object.isRequired,
  resetCards: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    info: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetCards: () =>dispatch(resetData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingEnd);
