import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import * as infoActions from '../../actions/infoActions';

import Card from './Card';
import TrainingStats from './TrainingStats';

class TrainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      activeCard: {}
    };
    this.handleMark = this.handleMark.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
  }

  handleMark(card, mark) {
    this.props.handleMark(card, mark);
  }

  handleReveal() {
    this.props.handleReveal();
  }

  render() {
    const { activeCard } = this.state;
    const { cards, info, handleReveal } = this.props;
    return (
      <div>
        <TrainingStats info={info} />
        <Card cards={cards} info={info} markCard={this.handleMark} handleReveal={handleReveal} />
      </div>
    );
  }
}

TrainPage.propTypes = {
  cards: PropTypes.array,
  info: PropTypes.object,
  handleMark: PropTypes.func.isRequired,
  handleReveal: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards,
    info: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMark: (card, mark) => dispatch(infoActions.markCard(card, mark)),
    handleReveal: () => dispatch(infoActions.revealAnswer())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainPage);
