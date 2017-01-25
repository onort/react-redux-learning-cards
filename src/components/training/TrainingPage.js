import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataActions';

import mockData from '../../api/mockData';
import Card from './Card';

class TrainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      activeCard: {}
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.setState({ currentCard: this.state.currentCard + 1 });
  }

  render() {
    const { currentCard, activeCard } = this.state;
    const { cards } = this.props;
    return (
      <div>
        <h4>Total Cards: {cards.length} | Current: {currentCard + 1}</h4>
        <Card currentCard={currentCard} handleNext={this.handleNext} cards={cards} />
      </div>
    );
  }
}

TrainPage.propTypes = {
  cards: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    cards: state.cards
  };
}

export default connect(mapStateToProps)(TrainPage);