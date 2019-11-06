import { actionTypes } from "../actions";

const secretWord = (state = 'party', action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return 'party'
    case actionTypes.NEW_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}

export default secretWord;