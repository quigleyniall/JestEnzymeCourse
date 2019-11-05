import { combineReducers } from 'redux';
import successReducer from './reducers/successReducer';
import guessedWordReducers from './reducers/guessedWordReducer';
import secretWordReducers from './reducers/secretWordReducer';

const rootReducer = combineReducers(
  successReducer,
  guessedWordReducers,
  secretWordReducers
);

export default rootReducer;
