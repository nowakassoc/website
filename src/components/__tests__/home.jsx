import React from 'react';
import { render } from 'react-testing-library';
import Home from '../Home';

it('Home renders correctly', () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
