import { combineReducers } from 'redux';
import { questions } from './question';

const allReducers = combineReducers({
  questions,
});

export default allReducers;
