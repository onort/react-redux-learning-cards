import React, { PropTypes } from 'react';

const Card = ({ cards, currentCard, handleNext }) => {
  const cardToRender = cards[currentCard];
  return (
    <div className="card-container">
      { cardToRender ? <h3>{cardToRender.word}</h3> : <h3>No card to Render</h3>}
      <div className="card-actions">
        <button className="lc-button-inverted reveal" onClick={handleNext}>
          <i className="material-icons">chrome_reader_mode</i>
        </button>
        <button className="lc-button correct" onClick={handleNext}><i className="material-icons">done</i></button>
        <button className="lc-button repeat" onClick={handleNext}><i className="material-icons">cached</i></button>
        <button className="lc-button wrong" onClick={handleNext}><i className="material-icons">clear</i></button>
      </div>
    </div>
  );
};

Card.propTypes = {
  cards: PropTypes.array.isRequired,
  currentCard: PropTypes.number,
  handleNext: PropTypes.func.isRequired,
};

export default Card;