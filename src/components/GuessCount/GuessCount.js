import React from 'react';

class GuessCount extends React.Component {
  render() {
    const { guessedWords } = this.props;
    return (
      <div data-test="component-guess">Total Guesses {guessedWords.length}</div>
    )
  }
}


export default GuessCount;