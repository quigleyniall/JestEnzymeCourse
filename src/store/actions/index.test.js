import { correctGuess, actionTypes } from './';

describe('correct guess', () => {
  test('it returns an action with type correct guess', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  })
})