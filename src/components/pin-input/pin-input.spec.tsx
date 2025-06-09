import React from 'react';

import { PinInput } from '.';
import { renderWithTheme as render } from '../../test-utils';

jest.mock('react-native-toast-message', () => 'Toast');

describe('PinInput component', () => {
  it('should render component passed to children', () => {
    render(<PinInput />);
  });
});
