import { storeFactory } from '../testUtils';
import { guessWord } from '../../store/actions';

describe('guessword action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    })

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      
      const expectedState = {
        ...initialState,
        success: false,
        guessWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {

    });
  })

  describe('some guessed words', () => {
    test('updates state correctly for unsuccessful guess', () => {
      
    });

    test('updates state correctly for successful guess', () => {

    });
  })
})