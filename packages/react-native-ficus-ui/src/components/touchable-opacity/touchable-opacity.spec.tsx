import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { TouchableOpacity } from './touchable-opacity.component';
import type { TouchableOpacityProps } from './touchable-opacity.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('TouchableOpacity component', () => {
  const TestTouchableOpacity: React.FC<TouchableOpacityProps> = (props) => (
    <ThemeProvider>
      <TouchableOpacity {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestTouchableOpacity>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestTouchableOpacity>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
