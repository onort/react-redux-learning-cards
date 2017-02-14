import * as types from '../actions/types';
import initialState from './initialState';

export default function topicReducer(state = initialState.topics, action) {
  switch (action.type) {
    case types.GET_TOPICS_SUCCESS:
      return action.topics;
    default:
      return state;
  }
}
