import { theme } from '@ficus-ui/theme';
import { renderWithTheme as render } from '@test-utils';

import { Avatar } from '.';

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

  it('renders the image if src is valid', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true })) as jest.Mock;

    const { getByTestId } = render(
      <Avatar
        name="John Doe"
        src="https://example.com/avatar.jpg"
        testID="avatar-image"
      />
    );

    expect(getByTestId('avatar-image')).toBeTruthy();
  });

  it('renders initials if image fails to load', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false })) as jest.Mock;

    const { getByText } = render(
      <Avatar
        name="John Doe"
        src="https://example.com/avatar.jpg"
        testID="avatar-fallback"
      />
    );

    expect(getByText('JD')).toBeTruthy();
  });
});
