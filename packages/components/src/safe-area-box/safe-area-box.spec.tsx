import React from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render, screen } from '@testing-library/react-native';

import { SafeAreaBox, SafeAreaBoxProps } from '.';
import { Text } from '../text';

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
