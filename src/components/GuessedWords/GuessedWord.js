import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const { guessedWords } = props;
  
  const guessedWordsList = guessedWords.map((guessed, index) => (
    <tr key={index} data-test="guessed-word">
      <td>{index + 1}</td>
      <td>{guessed.guessedWord}</td>
      <td>{guessed.letterMatchCount}</td>
    </tr>
  ));

  const content = guessedWords.length === 0 ? (
    <span data-test="guessed-words-instruction">Please, Guess a word!</span>
    ) : (
    <div data-test="guessed-words">
      <h3>Guessed Words</h3>
      <table className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>Guess</th>
            <th>Matching Letters</th>            
          </tr>
        </thead>
        <tbody>
          { guessedWordsList }
        </tbody>
      </table>
    </div>);

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