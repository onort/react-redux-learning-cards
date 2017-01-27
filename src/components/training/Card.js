import React, { Component, PropTypes } from 'react';

import AnswerBody from './AnswerBody';
import CardHeader from './CardHeader';
import QuestionBody from './QuestionBody';
import TrainingEnd from './TrainingEnd';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false
    };
    this.handleReveal = this.handleReveal.bind(this);
    this.handleMark = this.handleMark.bind(this);
  }

  handleReveal() {
    this.props.handleReveal();
  }

  handleMark(mark) {
    this.props.markCard(this.props.cards[this.props.info.currentCard], mark);
  }

  render() {
    const { cards, info, markCard } = this.props;
    const cardToRender = cards ? cards[info.currentCard]: null;
    const unanswered = (
      <div>
        { cardToRender ? <QuestionBody card={cardToRender} handleReveal={this.handleReveal} /> : null}
      </div>
    );
    const answered = cardToRender ? (
      <div>
        <AnswerBody card={cardToRender} handleMark={this.handleMark} />
      </div>
    ) : null;
    return (
      <div className="card-container">
        <CardHeader title="Oxford 3000" />
        {info.answered ? answered : unanswered}
        {info.currentCard > 0 && info.currentCard >= info.length ? <TrainingEnd info={info} /> : null}
      </div>
    );
  }
}

Card.propTypes = {
  cards: PropTypes.array.isRequired,
  info: PropTypes.object.isRequired,
  handleReveal: PropTypes.func.isRequired,
  markCard: PropTypes.func.isRequired
};

export default Card;
