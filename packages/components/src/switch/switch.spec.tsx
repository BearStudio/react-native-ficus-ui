import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Switch } from '.';

describe('Switch Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Switch testID="switch" />);
    expect(getByTestId('switch')).toBeTruthy();
  });
});
