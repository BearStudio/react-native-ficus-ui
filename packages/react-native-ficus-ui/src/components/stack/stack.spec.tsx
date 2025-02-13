import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Stack } from './stack.component';
import type { StackProps } from './stack.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Stack component', () => {
  const TestStack: React.FC<StackProps> = (props) => (
    <ThemeProvider>
      <Stack {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestStack spacing={20}>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestStack>
    );

    expect(
      screen.getAllByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
