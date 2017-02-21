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
      <div>
          <div className="end-header">
            <h3>Well Done!</h3>
            <span className="end-info">You have trained {currentCard} of {length} words in this list.</span>
          </div>
        <section className="card-container end-card">
          <div className="card-body">
            <div className="end-results">
              <div className="result correct">
                <div className="percentage correct">
                  <CircularProgressbar percentage={this.getPercentage(correct)} />
                </div>
                <span className="end-amount correct">{correct}</span>
                <span className="end-type">You have marked {correct} of {currentCard} words as correct.</span>
              </div>
              <div className="result repeat">
                <div className="percentage repeat">
                  <CircularProgressbar percentage={this.getPercentage(repeat)} />
                </div>
                <span className="end-amount repeat">{repeat}</span>
                <span className="end-type">You have marked {repeat} of {currentCard} words as needs repeating.</span>
              </div>
              <div className="result wrong">
                <div className="percentage wrong">
                  <CircularProgressbar percentage={this.getPercentage(wrong)} />
                </div>
                <span className="end-amount wrong">{wrong}</span>
                <span className="end-type">You have marked {wrong} of {currentCard} words as wrong.</span>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </section>
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
