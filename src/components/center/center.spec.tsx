import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Center } from './center.component';
import type { CenterProps } from './center.type';
import { ThemeProvider } from '../../theme/theme.provider';

describe('Center component', () => {
  const TestCenter: React.FC<CenterProps> = (props) => (
    <ThemeProvider>
      <Center {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestCenter>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestCenter>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
