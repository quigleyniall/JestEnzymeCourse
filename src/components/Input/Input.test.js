import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState = {}) => {
  return shallow(<Input store={storeFactory(initialState)} />).dive().dive();  
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {      
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    })

    test('renders the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    })
  })

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    })

    test('does not render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    })
  })
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp  = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('guessword action creator is a function prop', () => {
    const wrapper = setup();
    const guesswordProp = wrapper.instance().props.guessWord;
    expect(guesswordProp).toBeInstanceOf(Function);
  })
})


describe('guessword action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
  
    const props = {
      success: false,
      guessWord: guessWordMock
    }

    wrapper = shallow(<UnconnectedInput {...props} />);

    wrapper.setState({ currentGuess: guessedWord });

    const button = findByTestAttr(wrapper, 'submit-button');
    button.simulate('click', { preventDefault() {} });
  });

  test('guesswords function is ran when the submit button is clicked', () => {    
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('calls guessword with input value as argument', () => {    
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });

  test('empties input box when form is submitted', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  })
})
