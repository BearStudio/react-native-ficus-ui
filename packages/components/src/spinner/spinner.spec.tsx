import React from 'react';

import { render } from '@testing-library/react-native';

import { Spinner } from '.';

describe('ActivityIndicator Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Spinner testID="loading-indicator" />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('applies custom color', () => {
    const { getByTestId } = render(
      <Spinner testID="loading-indicator" color="red" />
    );
    expect(getByTestId('loading-indicator').props.color).toBe('red');
  });

  it('applies custom size', () => {
    const { getByTestId } = render(
      <Spinner testID="loading-indicator" size="large" />
    );
    expect(getByTestId('loading-indicator').props.size).toBe('large');
  });
});
