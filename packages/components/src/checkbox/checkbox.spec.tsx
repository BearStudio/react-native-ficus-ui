import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Checkbox } from '.';

describe('Checkbox Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" />);
    expect(getByTestId('checkbox')).toBeTruthy();
  });
});
