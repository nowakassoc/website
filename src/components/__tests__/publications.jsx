import React from 'react';
import { render } from 'react-testing-library';
import Publications from '../Publications';

it('Publications renders correctly', () => {
  const tree = render(<Publications />);
  expect(tree).toMatchSnapshot();
});
