import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Box } from './box.component';
import type { BoxProps } from './box.type';
import { ThemeProvider } from 'src/theme/theme.provider';

describe('Box component', () => {
  const TestBox: React.FC<BoxProps> = (props) => (
    <ThemeProvider>
      <Box {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestBox>
        <Text>I love magnus ui</Text>
      </TestBox>
    );

    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
