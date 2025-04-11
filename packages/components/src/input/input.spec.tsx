import React from 'react';

import { render } from '@testing-library/react-native';

import { Input } from '.';

describe('Input component', () => {
  it('should render component passed to children', () => {
    render(<Input placeholder="Username" />);
  });
});
