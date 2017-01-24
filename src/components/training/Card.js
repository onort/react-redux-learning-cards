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

  handleNext() {
    this.setState({ answered: false});
    this.props.handleNext();
  }

  render() {
    const { handleNext, cards, currentCard } = this.props;
    const cardToRender = cards ? cards[currentCard]: null;
    const unanswered = (
      <div>
      { cardToRender ? <h3>{cardToRender.word}</h3> : <h3>No card to Render</h3>}
      <div className="card-actions">
        <button className="lc-button-inverted reveal" onClick={this.handleReveal}>
          <i className="material-icons">chrome_reader_mode</i>
        </button>
      </div>
    </div>
    );
    const answered = cardToRender ? (
      <div>
        <div className="card-body">
          <h3>{cardToRender.word}</h3>
          {cardToRender.meanings.map((meaning, index) => <h3 key={index}>{meaning}</h3>)}
        </div>
        <div className="card-actions">
          <button className="lc-button correct" onClick={this.handleNext}><i className="material-icons">done</i></button>
          <button className="lc-button repeat" onClick={this.handleNext}><i className="material-icons">cached</i></button>
          <button className="lc-button wrong" onClick={this.handleNext}><i className="material-icons">clear</i></button>
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
  currentCard: PropTypes.number,
  handleNext: PropTypes.func.isRequired,
};

export default Card;