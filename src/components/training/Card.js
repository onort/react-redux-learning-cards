import React, { Component, PropTypes } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false
    };
    this.handleReveal = this.handleReveal.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleReveal() {
    this.setState({ answered: true });
  }

  handleNext(mark) {
    this.setState({ answered: false});
    this.props.markCard(this.props.cards[this.props.info.currentCard], mark);
  }

  wordMeanings(meaning, index) {
    return <li key={index}>{meaning}</li>;
  }

  // TODO: Header, Body, Actions components?
  // TODO: Conditional rendering unanswered/answered/finished 
  render() {
    const { cards, info, markCard } = this.props;
    const cardToRender = cards ? cards[info.currentCard]: null;
    const unanswered = (
      <div>
        <div className="card-header">
          <h3>Oxford 3000</h3>
        </div>
        <div className="card-body">
          { cardToRender ? 
            <h3 className="question"><small>What is the meaning of </small><br /> {cardToRender.word}?</h3> : 
            <h3>No card to Render</h3>}
        </div>
        <div className="card-actions">
          <button className="lc-button-inverted reveal" onClick={this.handleReveal}>
            <i className="material-icons">speaker_notes</i>
          </button>
        </div>
      </div>
    );
    const answered = cardToRender ? (
      <div>
        <div className="card-header">
          <h3>Oxford 3000</h3>
        </div>
        <div className="card-body">
          <h3>{cardToRender.word} <span className="card-type">({cardToRender.type})</span></h3>
          <ol className="meanings">
            {cardToRender.meanings.map(this.wordMeanings)}
          </ol>
        </div>
        <div className="card-actions">
          <h4>How did it go?</h4>
          <button className="lc-button-inverted correct" onClick={() => this.handleNext(1)}><i className="material-icons">done</i></button>
          <button className="lc-button-inverted repeat" onClick={() => this.handleNext(0)}><i className="material-icons">cached</i></button>
          <button className="lc-button-inverted wrong" onClick={() => this.handleNext(-1)}><i className="material-icons">clear</i></button>
        </div>
      </div>
    ) : null;
    return (
      <div className="card-container">
        {this.state.answered ? answered : unanswered}
      </div>
    );
  }
}

Card.propTypes = {
  cards: PropTypes.array.isRequired,
  info: PropTypes.object.isRequired,
  markCard: PropTypes.func.isRequired
};

export default Card;
