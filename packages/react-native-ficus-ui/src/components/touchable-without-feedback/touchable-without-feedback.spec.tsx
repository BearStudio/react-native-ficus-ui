import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '../../theme/theme.provider';
import { Text } from '../text/text.component';
import { TouchableWithoutFeedback } from './touchable-without-feedback.component';
import type { TouchableWithoutFeedbackProps } from './touchable-without-feedback.type';

jest.mock('react-native-toast-message', () => 'Toast');

describe('TouchableWithoutFeedback component', () => {
  const TestTouchableWithoutFeedback: React.FC<
    TouchableWithoutFeedbackProps
  > = (props) => (
    <ThemeProvider>
      <TouchableWithoutFeedback {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestTouchableWithoutFeedback>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </TestTouchableWithoutFeedback>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
