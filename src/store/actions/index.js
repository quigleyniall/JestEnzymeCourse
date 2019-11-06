import axios from 'axios';
import { getLetterMatchCount } from '../../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESETS_GUESSES: 'RESETS_GUESSES',
  NEW_SECRET_WORD: 'NEW_SECRET_WORD',
  SET_SUCCESS_FALSE: 'SET_SUCCESS_FALSE'
};

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  });

  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS })
  }
}

export const getSecretWord = () => (dispatch) => {
  return axios.get('http://localhost:3030')
  .then((res) => {
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: res.data
    });
  })
}

export const resetGuessList = () => ({
  type: actionTypes.RESETS_GUESSES
})

export const newSecretWord = (word) => ({
  type: actionTypes.NEW_SECRET_WORD,
  payload: word
});

export const restartGame = () => ({
  type: actionTypes.SET_SUCCESS_FALSE
})