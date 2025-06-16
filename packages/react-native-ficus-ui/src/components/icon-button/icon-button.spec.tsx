import { fireEvent } from '@testing-library/react-native';

import { IconButton } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Icon } from '../icon';
import { getIconSet } from '../icon/icon.service';

jest.mock('../icon/icon.service', () => ({
  getIconSet: jest.fn(() => jest.fn(() => null)), // Mock the icon component
}));

describe('IconButton component', () => {
  it('should render default icon with no props', () => {
    const { getByTestId } = render(
      <IconButton testID="icon-button-no-props" icon={<Icon name="home" />} />
    );

    expect(getIconSet).toHaveBeenCalled();
    expect(getByTestId('icon-button-no-props')).toBeTruthy();
  });

  it('should pressing trigger event', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <IconButton
        testID="icon-button-press"
        icon={<Icon name="home" />}
        onPress={onPressMock}
      />
    );

    const button = getByTestId('icon-button-press');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
