import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '../../../rtl.setup';
import Home from './index';

describe('Home', () => {
  afterEach(cleanup);
  it('renders', () => {
    const { asFragment, getByTestId, getByText } = render(<Home />);
    expect(asFragment).toMatchSnapshot();
    expect(getByTestId('h1tag')).toHaveTextContent('Welcome Home to EpicMail');
  });
});
