import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Text, ActivityIndicator } from 'react-native';
import { Input } from './input.component';

describe('Input component', () => {
  it('renders without errors', () => {
    const { getByTestId } = render(<Input testID="input-component" />);
    const inputComponent = getByTestId('input-component');
    expect(inputComponent).toBeTruthy();
  });

  it('handles onFocus and onBlur events', () => {
    const onFocusMock = jest.fn();
    const onBlurMock = jest.fn();

    const { getByTestId } = render(
      <Input testID="input" onFocus={onFocusMock} onBlur={onBlurMock} />
    );

    const inputComponent = getByTestId('input');
    fireEvent(inputComponent, 'focus');
    expect(onFocusMock).toHaveBeenCalled();
    expect(onBlurMock).not.toHaveBeenCalled();

    fireEvent(inputComponent, 'blur');
    expect(onBlurMock).toHaveBeenCalled();
  });

  it('renders with a prefix and suffix', () => {
    const { getByTestId } = render(
      <Input
        prefix={<Text testID="prefix">Prefix</Text>}
        suffix={<Text testID="suffix">Suffix</Text>}
      />
    );

    const prefixElement = getByTestId('prefix');
    const suffixElement = getByTestId('suffix');

    expect(prefixElement).toBeTruthy();
    expect(suffixElement).toBeTruthy();
  });

  it('displays loading indicator when isLoading is true', () => {
    render(<Input testID="input" isLoading={true} />);
    const activityIndicator = screen.UNSAFE_getByType(ActivityIndicator);

    expect(activityIndicator).toBeTruthy();
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <Input testID="input" borderColor={'red'} fontSize={20} />
    );
    const inputComponent = getByTestId('input');

    expect(inputComponent).toHaveStyle({ borderColor: 'red', fontSize: 20 });
  });
});
