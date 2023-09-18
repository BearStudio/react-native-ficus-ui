import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import { Button } from './button.component';
import { ActivityIndicator } from 'react-native';

afterEach(cleanup);

describe('Button component', () => {
  it('should render without errors', () => {
    render(<Button>I love Ficus UI (forked from Magnus UI)</Button>);

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });

  it('should button onPress trigger event', () => {
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
    const { UNSAFE_getByType } = render(<Button isLoading />);

    const activityIndicator = UNSAFE_getByType(ActivityIndicator);

    expect(activityIndicator).toBeTruthy();
  });
});
