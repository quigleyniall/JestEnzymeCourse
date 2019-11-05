import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  return shallow(<Input store={storeFactory(initialState)} />).dive().dive();  
};



describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    })

    test('renders the input box', () => {

    });

    test('renders submit button', () => {

    })
  })

  describe('word has been guessed', () => {
    test('renders component without error', () => {

    })

    test('does not render the input box', () => {

    });

    test('does not render submit button', () => {
      
    })
  })
});

describe('update state', () => {

})