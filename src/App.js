import React from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './store/actions';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWord';
import Input from './components/Input/Input';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { getSecretWord } = this.props;
    const secretWord = getSecretWord();
  }
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className="container">
        <h3>Jotto</h3>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({ success, guessedWords, secretWord })

export default connect(mapStateToProps, { getSecretWord })(App);
