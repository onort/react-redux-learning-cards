import * as types from '../actions/types';
import initialState from './initialState';

export default function dataReducer(state = initialState.cards, action) {
  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return action.data;
    case types.MARK_CARD:
      return state.map(card => {
        if (card.id === action.card.id) {
          card.score = card.score + action.mark;
          return card;
        }
        return card;
      });
    default:
      return state;
  }
}
