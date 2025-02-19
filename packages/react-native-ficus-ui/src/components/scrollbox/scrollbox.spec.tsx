import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '../../theme/theme.provider';
import { Text } from '../text/text.component';
import { ScrollBox } from './scrollbox.component';
import type { ScrollBoxProps } from './scrollbox.type';

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
