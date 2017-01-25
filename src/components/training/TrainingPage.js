import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';
import * as infoActions from '../../actions/infoActions';

import mockData from '../../api/mockData';
import Card from './Card';

class TrainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      activeCard: {}
    };
    this.handleMark = this.handleMark.bind(this);
  }

  handleMark(card) {
    this.props.handleMark(card);
  }

  render() {
    const { currentCard, activeCard } = this.state;
    const { cards, info } = this.props;
    return (
      <div>
        <h4>Total Cards: {cards.length} | Current: {currentCard + 1}</h4>
        <Card cards={cards} info={info} markCard={this.handleMark}  />
      </div>
    );
  }
}

TrainPage.propTypes = {
  cards: PropTypes.array,
  info: PropTypes.object,
  handleMark: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards,
    info: state.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMark: card => dispatch(infoActions.markCard(card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainPage);
