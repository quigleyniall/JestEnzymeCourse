import React from 'react';
import Congrats from './components/Congrats/Congrats';
import './App.css';
import GuessedWords from './components/GuessedWords/GuessedWord';

function App() {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  return (
    <div className="container">
      <h3>Jotto</h3>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
