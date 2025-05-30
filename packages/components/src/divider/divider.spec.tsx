import { renderWithTheme as render } from '@test-utils';
import { theme } from 'react-native-ficus-ui/theme';

import { Divider } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Flex component', () => {
  it('applies the horizontal direction', () => {
    const { getByTestId } = render(
      <Divider testID="divider-container" orientation="horizontal" />
    );
    const dividerComponent = getByTestId('divider-container');

    expect(dividerComponent).toBeTruthy();
  });

  it('applies the vertical direction', () => {
    const { getByTestId } = render(
      <Divider testID="divider-container" orientation="vertical" />
    );
    const dividerComponent = getByTestId('divider-container');

    expect(dividerComponent).toBeTruthy();
  });
  it('applies the red color', () => {
    const { getByTestId } = render(
      <Divider
        testID="divider-variant"
        orientation="vertical"
        color="red.500"
      />
    );
    const dividerComponent = getByTestId('divider-variant');

    expect(dividerComponent).toHaveStyle({
      backgroundColor: theme.colors.red[500],
    });
  });
});
