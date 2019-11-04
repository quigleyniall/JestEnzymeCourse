import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const { guessedWords } = props;

  const content = guessedWords.length === 0 ? (
    <span data-test="guessed-words-instruction">Please, Guess a word!</span>
    ) : <span />;

  return (
    <div data-test="component-guessed-words">
      { content }      
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords;