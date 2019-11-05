import { actionTypes } from '../actions';

const successReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return null;
  }
}

export default successReducer;