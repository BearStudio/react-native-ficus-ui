import { renderWithTheme as render } from '@test-utils';
import { fireEvent } from '@testing-library/react-native';

import { Checkbox } from './checkbox';
import { CheckboxGroup } from './group';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Checkbox component', () => {
  it('renders default Checkbox button', () => {
    const { getByTestId } = render(
      <Checkbox testID="Checkbox-default">Option 1</Checkbox>
    );

    expect(getByTestId('Checkbox-default')).toBeTruthy();
  });

  it('changes state when pressed', () => {
    const { getByTestId, getByText } = render(
      <Checkbox testID="Checkbox-clickable">Option 1</Checkbox>
    );

    const checkbox = getByTestId('Checkbox-clickable');
    fireEvent.press(checkbox);

    expect(getByText('X')).toBeTruthy(); // 'X' appears when checked
  });

  it('does not trigger onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Checkbox isDisabled onPress={onPressMock} testID="Checkbox-disabled">
        Disabled
      </Checkbox>
    );

    fireEvent.press(getByTestId('Checkbox-disabled'));

    expect(onPressMock).not.toHaveBeenCalled();
  });
  describe('CheckboxGroup component', () => {
    it('renders multiple Checkbox buttons', () => {
      const { getByTestId } = render(
        <CheckboxGroup testID="Checkbox-group">
          <Checkbox value="one" testID="Checkbox-one">
            Option 1
          </Checkbox>
          <Checkbox value="two" testID="Checkbox-two">
            Option 2
          </Checkbox>
        </CheckboxGroup>
      );

      expect(getByTestId('Checkbox-one')).toBeTruthy();
      expect(getByTestId('Checkbox-two')).toBeTruthy();
    });

    it('selects only one Checkbox at a time', () => {
      const { getByTestId, getByText } = render(
        <CheckboxGroup>
          <Checkbox value="one" testID="Checkbox-one">
            Option 1
          </Checkbox>
          <Checkbox value="two" testID="Checkbox-two">
            Option 2
          </Checkbox>
        </CheckboxGroup>
      );

      fireEvent.press(getByTestId('Checkbox-one'));
      expect(getByText('X')).toBeTruthy();
    });

    it('calls onChange when an option is selected', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <CheckboxGroup onChange={onChangeMock}>
          <Checkbox value="one" testID="Checkbox-one">
            Option 1
          </Checkbox>
        </CheckboxGroup>
      );

      fireEvent.press(getByTestId('Checkbox-one'));

      expect(onChangeMock).toHaveBeenCalledWith(['one']);
    });
  });
});
