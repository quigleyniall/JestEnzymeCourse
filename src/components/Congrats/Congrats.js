import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
  const message = props.success ? 
    'Congratulations! You guessed the word!' : ''
  
  return ( 
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message">
        {message}
      </span>
    </div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;