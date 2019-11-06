import React from 'react';
import { shallow } from 'enzyme';
import ResetGame from './ResetGame';
import { findByTestAttr } from '../../test/testUtils';


const resetGameMock = jest.fn(); 

const defaultProps = {
  success: true,
  resetGame: resetGameMock
};

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<ResetGame {...setupProps} />)
}
describe('button click', () => {
  test('resetGame function is run onclick', () => {
    
    const wrapper = setup();
    const buttonComponent = findByTestAttr(wrapper, 'reset-button');
    buttonComponent.simulate('click');
    const resetGameCallCount = resetGameMock.mock.calls.length;    
    expect(resetGameCallCount).toBe(1);
  });

  test('renders when success prop is true', () => {
    const wrapper = setup()
    const buttonComponent = findByTestAttr(wrapper, 'reset-button');
    expect(buttonComponent.length).toBe(1);
  })

  test('doesnt render when success prop is false', () => {    
    const wrapper = setup({ success: false })
    const buttonComponent = findByTestAttr(wrapper, 'reset-button');
    expect(buttonComponent.length).toBe(0);
  })
})
