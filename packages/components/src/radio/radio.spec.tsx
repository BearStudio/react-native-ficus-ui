import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Radio } from '.';

describe('Radio Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Radio testID="radio" />);
    expect(getByTestId('radio')).toBeTruthy();
  });
});
