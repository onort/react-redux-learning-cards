import { combineReducers } from 'redux';
import cards from './dataReducer';
import info from './infoReducer';
import topics from './topicReducer';

const rootReducer = combineReducers({
  cards,
  info,
  topics
});

export default rootReducer;
