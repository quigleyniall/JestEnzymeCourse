import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord, resetGuessList, restartGame, newSecretWord } from './';
// import { guessedWord } from '../reducers/guessedWordReducer';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds response word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      })
    });

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
  })
});

describe('resetGame action creator', () => {
  test('resets the guessed words array', () => {
    const store = storeFactory({ guessedWords: [
      { gussedWord: 'part', letterMatchCount: 4 },
      { gussedWord: 'hello', letterMatchCount: 0 },
      { gussedWord: 'Guess', letterMatchCount: 0 }
    ]});
    store.dispatch(resetGuessList())
    const guessList = store.getState().guessedWords;
    console.log(guessList)
    expect(guessList.length).toEqual(0);
  });

  test('picks a new word', () => {
    const store = storeFactory();
    const originalSecretWord = store.getState().secretWord;
    store.dispatch(newSecretWord('hello'));
    const updatedSecretWord = store.getState().secretWord
    expect(originalSecretWord).not.toBe(updatedSecretWord)
  });

  test('resets success in state', () => {
    const store = storeFactory({ success: true });
    store.dispatch(restartGame());
    const { success } = store.getState();
    expect(success).not.toBe(true);
  })
})