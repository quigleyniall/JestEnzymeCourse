import { combineReducers } from 'redux';
import successReducer from './reducers/successReducer';

const rootReducer = combineReducers(
  successReducer
);

export default rootReducer;
