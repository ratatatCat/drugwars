import React from 'react';
import { render } from '@testing-library/react';
import Events from './Events';

test('renders learn react link', () => {
  const { getByText } = render(<Events />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
