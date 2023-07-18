import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Flex } from './flex.component';
import type { FlexProps } from './flex.type';
import { ThemeProvider } from '../../theme/theme.provider';

describe('Box component', () => {
  const TestBox: React.FC<FlexProps> = (props) => (
    <ThemeProvider>
      <Flex {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestBox>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestBox>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
