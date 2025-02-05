import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { SafeAreaBox } from './safeareabox.component';
import type { SafeAreaBoxProps } from './safeareabox.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('SafeAreaBox component', () => {
  const TestSafeAreaBox: React.FC<SafeAreaBoxProps> = (props) => (
    <ThemeProvider>
      <SafeAreaBox {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestSafeAreaBox>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestSafeAreaBox>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
