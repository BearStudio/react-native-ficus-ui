import React from 'react';

import { Input } from '.';
import { renderWithTheme as render } from '../../test-utils';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Input component', () => {
  it('should render component passed to children', () => {
    render(<Input placeholder="Username" />);
  });
});
