import React from 'react';

import { Checkbox } from '.';
import { renderWithTheme as render } from '../../test-utils';

describe('Checkbox Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Checkbox testID="checkbox" />);
    expect(getByTestId('checkbox')).toBeTruthy();
  });
});
