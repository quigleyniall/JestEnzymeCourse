import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWord from './GuessedWord';

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 }
  ]
};

const setup = (props) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<GuessedWord {...setupProps} />);
}

test('does not throw warning with expected props', () => {  
  checkProps(GuessedWord, defaultProps);
})

describe('if there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test('shows instructions on what to do', () => {
    const instructions = findByTestAttr(wrapper, "guessed-words-instruction");
    expect(instructions.text().length).not.toBe(0);
  })
});

describe('if there are words guessed', () => { 
  let wrapper; 
  let guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ]

  beforeEach(() => {
    wrapper = setup({guessedWords});
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders guess words section', () => {
    const guessedWords = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWords.length).toBe(1);
  })

  test('contains the correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  })

});