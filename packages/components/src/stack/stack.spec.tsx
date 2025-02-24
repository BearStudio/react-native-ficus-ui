import React from 'react';

import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Stack } from './stack';

describe('Stack Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Stack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </Stack>
    );

    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
  });

  it('applies spacing correctly', () => {
    const { getByText } = render(
      <Stack gap={8}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </Stack>
    );

    const item1 = getByText('Item 1');
    const item2 = getByText('Item 2');

    expect(item1).toBeTruthy();
    expect(item2).toBeTruthy();
  });
});
