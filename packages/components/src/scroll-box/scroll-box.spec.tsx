import React from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render, screen } from '@testing-library/react-native';

import { ScrollBox, ScrollBoxProps } from '.';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('ScrollBox component', () => {
  const TestScrollBox: React.FC<ScrollBoxProps> = (props) => (
    <ThemeProvider>
      <ScrollBox {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestScrollBox>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestScrollBox>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
