import { theme } from '@ficus-ui/theme';
import { renderWithTheme as render } from '@test-utils';

import { Badge } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Badge component', () => {
  it('with no props should render default badge', () => {
    const { getByTestId } = render(<Badge testID="badge-no-props">Test</Badge>);

    // colorScheme gray and variant subtle
    expect(getByTestId('badge-no-props')).toHaveStyle({
      backgroundColor: theme.colors.gray[100],
    });
  });

  it('with variant should apply variant style', () => {
    const { getByTestId } = render(
      <Badge variant="solid" colorScheme="green" testID="badge-variant">
        Test
      </Badge>
    );

    expect(getByTestId('badge-variant')).toHaveStyle({
      backgroundColor: theme.colors.green[500],
    });
  });
});
