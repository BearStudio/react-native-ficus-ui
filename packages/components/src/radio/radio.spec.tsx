import { renderWithTheme as render } from '@test-utils';
import { fireEvent } from '@testing-library/react-native';

import { RadioGroup } from './group';
import { Radio } from './radio';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Radio component', () => {
  it('renders default radio button', () => {
    const { getByTestId } = render(
      <Radio testID="radio-default">Option 1</Radio>
    );

    expect(getByTestId('radio-default')).toBeTruthy();
  });

  it('changes state when pressed', () => {
    const { getByTestId, getByText } = render(
      <Radio testID="radio-clickable">Option 1</Radio>
    );

    const radio = getByTestId('radio-clickable');
    fireEvent.press(radio);

    expect(getByText('X')).toBeTruthy(); // 'X' appears when checked
  });

  it('does not trigger onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Radio isDisabled onPress={onPressMock} testID="radio-disabled">
        Disabled
      </Radio>
    );

    fireEvent.press(getByTestId('radio-disabled'));

    expect(onPressMock).not.toHaveBeenCalled();
  });
  describe('RadioGroup component', () => {
    it('renders multiple radio buttons', () => {
      const { getByTestId } = render(
        <RadioGroup testID="radio-group">
          <Radio value="one" testID="radio-one">
            Option 1
          </Radio>
          <Radio value="two" testID="radio-two">
            Option 2
          </Radio>
        </RadioGroup>
      );

      expect(getByTestId('radio-one')).toBeTruthy();
      expect(getByTestId('radio-two')).toBeTruthy();
    });

    it('selects only one radio at a time', () => {
      const { getByTestId, getByText } = render(
        <RadioGroup>
          <Radio value="one" testID="radio-one">
            Option 1
          </Radio>
          <Radio value="two" testID="radio-two">
            Option 2
          </Radio>
        </RadioGroup>
      );

      fireEvent.press(getByTestId('radio-one'));
      expect(getByText('X')).toBeTruthy();
    });

    it('calls onChange when an option is selected', () => {
      const onChangeMock = jest.fn();
      const { getByTestId } = render(
        <RadioGroup onChange={onChangeMock}>
          <Radio value="one" testID="radio-one">
            Option 1
          </Radio>
        </RadioGroup>
      );

      fireEvent.press(getByTestId('radio-one'));

      expect(onChangeMock).toHaveBeenCalledWith('one');
    });
  });
});
