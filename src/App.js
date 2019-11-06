import React from 'react';
import { connect } from 'react-redux';
import { getSecretWord, restartGame, resetGuessList, newSecretWord } from './store/actions';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWord';
import Input from './components/Input/Input';
import GuessCount from './components/GuessCount/GuessCount';
import ResetButton from './components/ResetGame/ResetGame';
import './App.css';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  resetGame = () => {
    const { restartGame, resetGuessList, newSecretWord } = this.props;
    restartGame();
    resetGuessList();
    newSecretWord('Hello');
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;
    return (
      <div className="container">
        <h3>Jotto</h3>
        <div>The Secret word is {secretWord}</div>
        <Congrats success={success} />
        <ResetButton success={success} resetGame={this.resetGame} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
        <GuessCount guessedWords={guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({ success, guessedWords, secretWord })

export default connect(mapStateToProps, { getSecretWord, restartGame, resetGuessList, newSecretWord })(UnconnectedApp);
