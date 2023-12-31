import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import { Button } from './button.component';
import { ActivityIndicator, View } from 'react-native';
import { defaultTheme } from '../../theme/theme.default';

afterEach(cleanup);

describe('Button component', () => {
  it('should render without errors', () => {
    render(<Button>I love Ficus UI (forked from Magnus UI)</Button>);

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });

  it('should pressing trigger event', () => {
    const onPressMock = jest.fn();

    render(<Button onPress={onPressMock}>Click Me</Button>);

    const button = screen.getByText('Click Me');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when isDisabled is true', () => {
    const onPressMock = jest.fn();

    render(
      <Button onPress={onPressMock} isDisabled>
        Click Me
      </Button>
    );

    expect(onPressMock).not.toHaveBeenCalled();

    const button = screen.getByText('Click Me');

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

    render(
      <View>
        <Button testID={colorNameButtonId} bg={red} />
        <Button testID={hexCodeButtonId} bg={hexCode} />
        <Button testID={specificHueButtonId} bg={red600} />
      </View>
    );

    const colorNameButton = screen.getByTestId(colorNameButtonId);
    const hexCodeButton = screen.getByTestId(hexCodeButtonId);
    const specificHueButton = screen.getByTestId(specificHueButtonId);

    expect(colorNameButton).toBeVisible();
    expect(colorNameButton).toHaveProp('style');
    expect(colorNameButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(colorNameButton.props.style[0].backgroundColor).toEqual(red);

    expect(hexCodeButton).toBeVisible();
    expect(hexCodeButton).toHaveProp('style');
    expect(hexCodeButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(hexCodeButton.props.style[0].backgroundColor).toEqual(hexCode);

    expect(specificHueButton).toBeVisible();
    expect(specificHueButton).toHaveProp('style');
    expect(specificHueButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(specificHueButton.props.style[0].backgroundColor).toEqual(
      defaultTheme?.colors?.red[600]
    );
  });

  it('should render text with color', () => {
    const buttonId = 'button';

    render(
      <Button testID={buttonId} color="black">
        This is the button
      </Button>
    );

    const text = screen.getByText('This is the button');

    expect(text).toBeVisible();
    expect(text).toHaveProp('style');
    expect(text.props.style).toHaveProperty('color');
    expect(text.props.style.color).toEqual('black');
  });
});
