import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro';

test('renders learn react link', () => {
  const { getByText } = render(<Intro />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
