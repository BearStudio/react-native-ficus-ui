import { getThemeColor, theme } from '@ficus-ui/theme';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface SliderOptions {
  min?: number;
  max?: number;
  defaultValue?: number;
  filledTrackColor?: string;
  colorScheme?: string;
}

export interface SliderProps
  extends NativeFicusProps<'Slider'>,
    SliderOptions {}

export const Slider = forwardRef<SliderProps, 'Slider'>(
  function Slider(props, ref) {
    const { min, max, defaultValue, filledTrackColor, colorScheme, ...rest } =
      props;

    return (
      <ficus.Slider
        ref={ref}
        minimumValue={min}
        maximumValue={max}
        value={defaultValue}
        minimumTrackTintColor={getThemeColor(
          theme.colors,
          `${colorScheme}.500`
        )}
        maximumTrackTintColor={getThemeColor(theme.colors, filledTrackColor)}
        thumbTintColor="white"
        {...rest}
      />
    );
  }
);
