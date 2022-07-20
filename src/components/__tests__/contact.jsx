import React from 'react';
import { render } from 'react-testing-library';
import Contact from '../Contact';

it('Contact renders correctly', () => {
  const tree = render(<Contact />);
  expect(tree).toMatchSnapshot();
});

test('contact renders name field', () => {
  const { getByLabelText, debug } = render(<Contact />);
  expect(getByLabelText(/name/i));
});

test('contact renders organization field', () => {
  const { getByLabelText, debug } = render(<Contact />);
  expect(getByLabelText(/organization/i));
});

test('contact renders email field', () => {
  const { getByLabelText, debug } = render(<Contact />);
  expect(getByLabelText(/e-mail/i)).toBeTruthy();
});

test('contact renders phone field', () => {
  const { getByLabelText, debug } = render(<Contact />);
  expect(getByLabelText(/phone/i));
});

test('contact renders message field', () => {
  const { getByLabelText, debug } = render(<Contact />);
  expect(getByLabelText(/message/i));
});
