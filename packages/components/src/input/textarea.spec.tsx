import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Textarea } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Textarea component', () => {
  it('should render component passed to children', () => {
    render(<Textarea placeholder="Username" />);
  });
});
