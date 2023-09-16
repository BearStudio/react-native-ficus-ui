import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { TouchableHighlight } from './touchable-highlight.component';
import type { TouchableHighlightProps } from './touchable-highlight.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('TouchableHighlight component', () => {
  const TestTouchableHighlight: React.FC<TouchableHighlightProps> = (props) => (
    <ThemeProvider>
      <TouchableHighlight {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestTouchableHighlight>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestTouchableHighlight>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
