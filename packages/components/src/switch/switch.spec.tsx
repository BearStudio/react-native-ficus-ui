import React from 'react';

import { render } from '@testing-library/react-native';

import { Switch } from '.';

describe('Switch Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Switch testID="switch" />);
    expect(getByTestId('switch')).toBeTruthy();
  });
});
