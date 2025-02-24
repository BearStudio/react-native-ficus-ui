import React from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render, screen } from '@testing-library/react-native';

import { Text, TextProps } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Text component', () => {
  const TestText: React.FC<TextProps> = (props) => (
    <ThemeProvider>
      <Text {...props} />
    </ThemeProvider>
  );

  it('should render text correctly', () => {
    render(<TestText>I love Ficus UI (forked from Magnus UI)</TestText>);

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });

  it('should apply styles correctly', () => {
    const { getByText } = render(
      <TestText fontSize="xl" color="blue.500">
        Styled Text
      </TestText>
    );

    const textElement = getByText('Styled Text');

    expect(textElement).toBeTruthy();
  });

  it('should support theming props', () => {
    render(<TestText variant="bold">Themed Text</TestText>);

    expect(screen.getByText('Themed Text')).toBeTruthy();
  });
});
