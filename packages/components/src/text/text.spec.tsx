import { render, screen } from '@testing-library/react-native';

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
  });

  it('should support theming props', () => {
    render(<Text variant="bold">Themed Text</Text>);

    expect(screen.getByText('Themed Text')).toBeTruthy();
  });
});
