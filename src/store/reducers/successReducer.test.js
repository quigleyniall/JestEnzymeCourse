import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state when no action is passed', () => {
  const result = successReducer({}, {});
  expect(result).toBe(null)
});

test('return success to be true when correct word is guessed', () => {
  const result = successReducer({}, { type: actionTypes.CORRECT_GUESS});
  expect(result).toBe(true);
})