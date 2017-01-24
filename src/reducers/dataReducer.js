import * as types from '../actions/types';
import initialState from './initialState';

export default function dataReducer(state = initialState.cards, action) {
  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return action.data;
    default:
      return state;
  }
}