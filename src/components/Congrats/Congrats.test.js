import React from 'react';
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Congrats from './Congrats';


const defaultProps = { success: true };

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');  
  expect(component.length).toBe(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(0);
});

test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text().length).not.toBe(0);
});

test('Does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
})