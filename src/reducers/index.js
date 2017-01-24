import { combineReducers } from 'redux';
import cards from './dataReducer';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;