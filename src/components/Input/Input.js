import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../store/actions';

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentGuess: ''
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const { guessWord } = this.props;
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      guessWord(currentGuess);
    }
    this.setState({ currentGuess: '' })
  }

  handleChange = e => {
    this.setState({ currentGuess: e.target.value });
  }

  render() {
    const { success } = this.props;
    const { currentGuess } = this.state;
    const content = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="m2-2 mx-sm-3"
          onChange={this.handleChange}
          value={currentGuess}
          type="text"
          placeholder="Enter Guess!"
        />
        <button
          data-test="submit-button"
          type="submit"
          onClick={this.submitForm}
          className="btn btn-primary">
          Guess!
        </button>
      </form>
    );

    return <div data-test="component-input">{content}</div>   
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);