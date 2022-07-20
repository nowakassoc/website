import React from 'react';
import { render } from 'react-testing-library';
import Services from '../Services';

it('Services renders correctly', () => {
  const tree = render(<Services />);
  expect(tree).toMatchSnapshot();
});
