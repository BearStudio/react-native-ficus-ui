import React from 'react';

import { fireEvent } from '@testing-library/react-native';

import { Slider } from '.';
import { renderWithTheme as render } from '../../test-utils';

describe('Slider Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Slider min={0} max={100} defaultValue={50} testID="slider" />
    );
    expect(getByTestId('slider')).toBeTruthy();
  });

  it('should have correct default values', () => {
    const { getByTestId } = render(
      <Slider min={10} max={90} defaultValue={30} testID="slider" />
    );
    const slider = getByTestId('slider');

    expect(slider.props.minimumValue).toBe(10);
    expect(slider.props.maximumValue).toBe(90);
    expect(slider.props.value).toBe(30);
  });

  it('should call onValueChange when value changes', () => {
    const mockOnValueChange = jest.fn();
    const { getByTestId } = render(
      <Slider
        min={0}
        max={100}
        defaultValue={50}
        onValueChange={mockOnValueChange}
        testID="slider"
      />
    );

    fireEvent(getByTestId('slider'), 'valueChange', 75);

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenCalledWith(75);
  });

  it('should apply the correct color scheme', () => {
    const { getByTestId } = render(
      <Slider colorScheme="blue" testID="slider" />
    );
    const slider = getByTestId('slider');

    expect(slider.props.minimumTrackTintColor).toBe('#3182ce');
  });

  it('should apply the correct filled track color', () => {
    const { getByTestId } = render(
      <Slider filledTrackColor="red.500" testID="slider" />
    );
    const slider = getByTestId('slider');

    expect(slider.props.maximumTrackTintColor).toBe('#E53E3E');
  });
});
