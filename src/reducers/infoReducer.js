import * as types from '../actions/types';
import initialState from './initialState';

export default function infoReducer(state = initialState.info, action) {
  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return state;
    case types.MARK_CARD:
      return Object.assign({}, state, { currentCard: state.currentCard + 1});
    default:
      return state;
  }
}
