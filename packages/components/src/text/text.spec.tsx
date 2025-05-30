import { renderWithTheme as render } from '@test-utils';
import { screen } from '@testing-library/react-native';
import { theme } from 'react-native-ficus-ui/theme';

import { Text } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Text component', () => {
  it('should render text correctly', () => {
    render(<Text>I love Ficus UI (forked from Magnus UI)</Text>);

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });

  it('should apply styles correctly', () => {
    const { getByText } = render(
      <Text fontSize="xl" color="blue.500">
        Styled Text
      </Text>
    );

    const textElement = getByText('Styled Text');

    expect(textElement).toBeTruthy();
    expect(textElement).toHaveStyle({
      color: theme.colors.blue[500],
      fontSize: theme.fontSizes.xl,
    });
  });

  it('should support theming props', () => {
    render(<Text fontWeight="bold">Themed Text</Text>);

    const textElement = screen.getByText('Themed Text');

    expect(textElement).toBeTruthy();
    expect(textElement).toHaveStyle({
      fontWeight: 700,
    });
  });
});
