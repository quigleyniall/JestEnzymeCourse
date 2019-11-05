import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
  render() {
    return (
      <div>
        <button>Hi there</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  {}
)(Input);