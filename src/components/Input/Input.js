import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    const { success } = this.props;
    const content = success ? null : (
      <form className="form-inline">
        <input data-test="input-box" className="m2-2 mx-sm-3" type="text" placeholder="Enter Guess!" />
        <button data-test="submit-button" type="submit" className="btn btn-primary">Guess!</button>
      </form>
    );

    return <div data-test="component-input">{content}</div>   
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(
  mapStateToProps,
  {}
)(Input);