import { combineReducers } from 'redux';
import successReducer from './reducers/successReducer';
import guessedWordReducers from './reducers/guessedWordReducer';
import secretWord from './reducers/secretWordReducer';

const rootReducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordReducers,
  secretWord
});

export default rootReducer;
