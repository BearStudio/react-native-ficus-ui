

import { Pressable } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { theme } from '../../theme';

describe('Pressable component', () => {
  it('should render correctly with default props', () => {
    const { getByTestId } = render(<Pressable testID="pressable-default" />);

    expect(getByTestId('pressable-default')).toBeTruthy();
  });

  it('should apply custom styles', () => {
    const { getByTestId } = render(
      <Pressable testID="pressable-styled" bg="red.500" />
    );

    expect(getByTestId('pressable-styled')).toHaveStyle({
      backgroundColor: theme.colors.red[500],
    });
  });

  it('should apply _pressed styles when pressed', () => {
    const { getByTestId } = render(
      <>
        <Pressable
          testOnly_pressed={true}
          testID="pressable-pressed"
          bg="blue.600"
          _pressed={{ bg: 'blue.500' }}
        />
        <Pressable
          testOnly_pressed={false}
          testID="pressable-not-pressed"
          bg="blue.600"
          _pressed={{ bg: 'blue.500' }}
        />
      </>
    );

    const pressablePressed = getByTestId('pressable-pressed');

    expect(pressablePressed).toHaveStyle({
      backgroundColor: theme.colors.blue[500],
    });

    const pressableNotPressed = getByTestId('pressable-not-pressed');

    expect(pressableNotPressed).toHaveStyle({
      backgroundColor: theme.colors.blue[600],
    });
  });
});
