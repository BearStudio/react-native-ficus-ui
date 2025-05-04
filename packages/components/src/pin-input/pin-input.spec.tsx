import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { PinInput } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('PinInput component', () => {
  it('should render component passed to children', () => {
    render(<PinInput />);
  });
});
