import { Center } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { theme } from '../../theme';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Center component', () => {
  it('should render child components correctly', () => {
    const { getByTestId } = render(
      <Center testID="center-container">
        <Box h={40} w={40} mr="sm" bg="green.500" testID="box-green" />
        <Box h={40} w={40} mr="sm" bg="teal.500" testID="box-teal" />
      </Center>
    );

    expect(getByTestId('center-container')).toHaveStyle({
      alignItems: 'center',
      justifyContent: 'center',
    });
    expect(getByTestId('box-green')).toHaveStyle({
      backgroundColor: theme.colors.green[500],
      height: 40,
      width: 40,
      marginRight: theme.space.sm,
    });
    expect(getByTestId('box-teal')).toHaveStyle({
      backgroundColor: theme.colors.teal[500],
      height: 40,
      width: 40,
      marginRight: theme.space.sm,
    });
  });
});
