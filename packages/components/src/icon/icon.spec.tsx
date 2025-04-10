import { theme } from '@ficus-ui/theme';
import { renderWithTheme as render } from '@test-utils';

import { Icon } from '.';
import { getIconSet } from './icon.service';

jest.mock('./icon.service', () => ({
  getIconSet: jest.fn(() => jest.fn(() => null)), // Mock the icon component
}));

describe('Icon component', () => {
  it('should render default icon with no props', () => {
    const { getByTestId } = render(<Icon testID="icon-no-props" name="home" />);

    expect(getIconSet).toHaveBeenCalled();
    expect(getByTestId('icon-no-props')).toBeTruthy();
  });

  it('should apply color from theme', () => {
    const { getByTestId } = render(
      <Icon testID="icon-color" name="home" color="blue.500" />
    );

    expect(getByTestId('icon-color').props.children.props.color).toBe(
      theme.colors.blue[500]
    );
  });

  it('should apply font size from theme', () => {
    const { getByTestId } = render(
      <Icon
        testID="icon-size"
        name="accessibility"
        color="blue.700"
        size="6xl"
        iconSet="Ionicons"
      />
    );
    expect(getByTestId('icon-size').props.children.props.size).toBe(
      theme.fontSizes['6xl']
    );
  });

  it('should use the correct icon set based on fontFamily', () => {
    render(<Icon testID="icon-font" name="home" iconSet="Feather" />);

    expect(getIconSet).toHaveBeenCalledWith('Feather');
  });

  it('should pass additional props correctly', () => {
    const { getByTestId } = render(
      <Icon
        testID="icon-custom"
        name="settings"
        accessibilityLabel="Settings Icon"
      />
    );

    expect(getByTestId('icon-custom').props.accessibilityLabel).toBe(
      'Settings Icon'
    );
  });
});
