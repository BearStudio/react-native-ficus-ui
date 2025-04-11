import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Input } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Input component', () => {
  it('should render component passed to children', () => {
    render(<Input placeholder="Username" />);
  });
});
