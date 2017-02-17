import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { resetData } from '../../actions/dataActions';
import CircularProgressbar from 'react-circular-progressbar';

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
  const { currentCard, correct, length, repeat, wrong } = this.props.info;
  const info = this.props.info;
    return (
      <div className="card-container">
        <h3 className="end-header">Done!</h3>
        <p className="end-text">You have trained {currentCard} of {length} words in this list.</p>
        <div className="end-stats">
          <div className="stat correct">
            <CircularProgressbar percentage={this.getPercentage(correct)} />
            <p className="end-amount">{correct}/<span className="end-length">{currentCard}</span></p>
            <p className="end-type">Correct</p>
          </div>
          <div className="stat repeat">
            <CircularProgressbar percentage={this.getPercentage(repeat)} />
            <p className="end-amount">{repeat}/<span className="end-length">{currentCard}</span></p>
            <p className="end-type">Needs Practice</p>
          </div>
          <div className="stat wrong">
            <CircularProgressbar percentage={this.getPercentage(wrong)} />
            <p className="end-amount">{wrong}/<span className="end-length">{currentCard}</span></p>
            <p className="end-type">Wrong</p>
          </div>
        </div>
        <div className="clearfix" />
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
