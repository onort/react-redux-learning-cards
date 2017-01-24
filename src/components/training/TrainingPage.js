import React, { Component, PropTypes } from 'react';

import mockData from '../../api/mockData';
import Card from './Card';

class TrainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      cards: mockData,
      activeCard: {}
    };
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    this.setState({ currentCard: this.state.currentCard + 1 });
  }

  render() {
    const { cards, currentCard, activeCard } = this.state;
    return (
      <div>
        <h3>Training Page</h3>
        <Card cards={cards} currentCard={currentCard} handleNext={this.handleNext} />
      </div>
    );
  }
}

export default TrainPage;