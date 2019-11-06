import React from 'react';
import { shallow } from 'enzyme';
import GuessCount from './GuessCount';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => {  
  const props = {
    guessedWords: [
      { guessedWord: 'hello', letterMatchCount: 0 },
      { guessedWord: 'polo', letterMatchCount: 1 },
      { guessedWord: 'parent', letterMatchCount: 3 },
      { guessedWord: 'hideous', letterMatchCount: 0 }
    ]
  }
  return shallow(<GuessCount {...props} />)
}

test('counts the correct number of guesses', () => {
  const wrapper = setup();
  const guessComponent = findByTestAttr(wrapper, 'component-guess');  
  expect(guessComponent.text()).toEqual('Total Guesses 4')
})