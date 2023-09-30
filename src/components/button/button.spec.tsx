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
    const defaultColorButtonId = 'defaultColorButton';
    const specificHueButtonId = 'specificHueButton';

    render(
      <View>
        <Button testID={defaultColorButtonId} bg="red" />
        <Button testID={specificHueButtonId} bg="red.600" />
      </View>
    );

    const defaultColorButton = screen.getByTestId(defaultColorButtonId);
    const specificHueButton = screen.getByTestId(specificHueButtonId);

    expect(defaultColorButton).toBeVisible();
    expect(defaultColorButton).toHaveProp('style');
    expect(defaultColorButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(defaultColorButton.props.style[0].backgroundColor).toEqual(
      defaultTheme?.colors?.red[500]
    );

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
