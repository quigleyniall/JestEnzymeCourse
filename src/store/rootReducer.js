import { combineReducers } from 'redux';
import successReducer from './reducers/successReducer';
import guessedWordReducers from './reducers/guessedWordReducer';

const rootReducer = combineReducers(
  successReducer,
  guessedWordReducers
);

export default rootReducer;
