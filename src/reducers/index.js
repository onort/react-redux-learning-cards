import { combineReducers } from 'redux';
import cards from './dataReducer';
import info from './infoReducer';

const rootReducer = combineReducers({
  cards,
  info
});

export default rootReducer;
