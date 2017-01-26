import * as types from '../actions/types';
import initialState from './initialState';

export default function infoReducer(state = initialState.info, action) {
  switch (action.type) {
    case types.MARK_CARD: {
      const newInfoObj = state;
      newInfoObj.currentCard += 1;
      if (action.mark === 1) newInfoObj.correct = newInfoObj.correct + 1;
      else if (action.mark === 0) newInfoObj.repeat = newInfoObj.repeat + 1;
      else if (action.mark === -1) newInfoObj.wrong = newInfoObj.wrong + 1;
      return Object.assign({}, newInfoObj);
    }
    case types.GET_DATA_SUCCESS:
      return Object.assign({}, state, { length: action.data.length });
    default:
      return state;
  }
}
