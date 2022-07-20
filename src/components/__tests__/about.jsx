import React from 'react';
import { render } from 'react-testing-library';
import About from '../About';

it('About renders correctly', () => {
  const tree = render(<About />);
  expect(tree).toMatchSnapshot();
});
