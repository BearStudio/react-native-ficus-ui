import React from 'react';

import { render } from '@testing-library/react-native';

import { Textarea } from '.';

describe('Textarea component', () => {
  it('should render component passed to children', () => {
    render(<Textarea placeholder="Username" />);
  });
});
