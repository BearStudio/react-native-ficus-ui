import { Avatar } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { theme } from '../../theme';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Avatar component', () => {
  it('renders initials when no image is provided', () => {
    const { getByText } = render(
      <Avatar name="John Doe" testID="avatar-initials" />
    );

    expect(getByText('JD')).toBeTruthy();
  });

  it('renders with a default background color', () => {
    const { getByTestId } = render(
      <Avatar name="John Doe" testID="avatar-bg" />
    );

    expect(getByTestId('avatar-bg')).toHaveStyle({
      backgroundColor: '#f2a9cd',
    });
  });

  it('renders with a custom color scheme', () => {
    const { getByTestId } = render(
      <Avatar name="John Doe" colorScheme="blue" testID="avatar-color-scheme" />
    );

    expect(getByTestId('avatar-color-scheme')).toHaveStyle({
      backgroundColor: theme.colors.blue[300],
    });
  });
});
