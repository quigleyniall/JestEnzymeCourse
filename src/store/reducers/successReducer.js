import { actionTypes } from '../actions';

const successReducer = (state=false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    case actionTypes.SET_SUCCESS_FALSE:
      return false;
    default:
      return state;
  }
}

export default successReducer;