import React from 'react';

import { renderWithTheme as render } from '@test-utils';
import { cleanup, fireEvent, screen } from '@testing-library/react-native';
import { ActivityIndicator, View } from 'react-native';
import { theme } from 'react-native-ficus-ui/theme';

import { Button } from '.';

afterEach(cleanup);

describe('Button component', () => {
  it('should render without errors', () => {
    const { getByText } = render(
      <Button>I love Ficus UI (forked from Magnus UI)</Button>
    );

    expect(getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });

  it('should pressing trigger event', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button onPress={onPressMock}>Click Me</Button>
    );

    const button = getByText('Click Me');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when isDisabled is true', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button onPress={onPressMock} isDisabled>
        Click Me
      </Button>
    );

    expect(onPressMock).not.toHaveBeenCalled();

    const button = getByText('Click Me');

    fireEvent.press(button);

    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('should render ActivityIndicator component if loading', () => {
    render(<Button isLoading />);

    const activityIndicator = screen.UNSAFE_getByType(ActivityIndicator);

    expect(activityIndicator).toBeTruthy();
  });

  it('should have background color of bg prop value', () => {
    const colorNameButtonId = 'colorNameButton';
    const hexCodeButtonId = 'hexCodeButton';
    const specificHueButtonId = 'specificHueButton';

    const red = 'red';
    const hexCode = '#FED7D7';
    const red600 = 'red.600';

    const { getByTestId } = render(
      <View>
        <Button testID={colorNameButtonId} bg={red} />
        <Button testID={hexCodeButtonId} bg={hexCode} />
        <Button testID={specificHueButtonId} bg={red600} />
      </View>
    );

    const specificHueButton = getByTestId(specificHueButtonId);

    expect(specificHueButton.props.style).toHaveProperty('backgroundColor');
    expect(specificHueButton.props.style.backgroundColor).toEqual(
      theme?.colors?.red?.[600]
    );
  });

  it('should render text with color', () => {
    const buttonId = 'button';

    const { getByText } = render(
      <Button testID={buttonId} color="black">
        This is the button
      </Button>
    );

    const text = getByText('This is the button');

    expect(text.props.style).toHaveProperty('color');
    expect(text.props.style.color).toEqual('#000000');
  });
});
