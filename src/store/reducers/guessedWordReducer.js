import { actionTypes } from '../actions';

const guessedWordReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload]
    case actionTypes.RESETS_GUESSES:
      return [];
    default:
      return state;
  }
}

export default guessedWordReducers;