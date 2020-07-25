import React from 'react';
import { render } from '@testing-library/react';
import Travel from './Travel';

test('renders learn react link', () => {
  const { getByText } = render(<Travel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
