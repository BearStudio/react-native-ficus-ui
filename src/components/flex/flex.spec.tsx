import { Flex } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Flex component', () => {
  it('applies the row direction', () => {
    const { getByTestId } = render(
      <Flex testID="flex-container" direction="row">
        <Box h={40} w={40} mr="sm" bg="green.500" />
        <Box h={40} w={40} mr="sm" bg="teal.500" />
      </Flex>
    );
    const flexComponent = getByTestId('flex-container');

    expect(flexComponent.props.style?.flexDirection).toBe('row');
  });

  it('applies the column direction', () => {
    const { getByTestId } = render(
      <Flex testID="flex-container" direction="column">
        <Box h={40} w={40} mr="sm" bg="green.500" />
        <Box h={40} w={40} mr="sm" bg="teal.500" />
      </Flex>
    );
    const flexComponent = getByTestId('flex-container');

    expect(flexComponent.props.style?.flexDirection).toBe('column');
  });
});
