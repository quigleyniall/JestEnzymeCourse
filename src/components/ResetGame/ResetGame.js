import React from 'react';

const ResetGame = ({ resetGame, success }) => (
  success ? (
  <button
    data-test="reset-button"
    className="btn btn-info"
    onClick={resetGame}>
    Reset Game
  </button>
  ) : null
)

export default ResetGame;