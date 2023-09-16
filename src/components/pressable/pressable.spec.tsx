import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Pressable } from './pressable.component';
import type { PressableProps } from './pressable.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Pressable component', () => {
  const TestPressable: React.FC<PressableProps> = (props) => (
    <ThemeProvider>
      <Pressable {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestPressable>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestPressable>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
