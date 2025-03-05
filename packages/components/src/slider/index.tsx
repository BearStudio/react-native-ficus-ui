import { useMemo } from 'react';

import { ThemingProps } from '@ficus-ui/style-system';
import { getColor, useTheme } from '@ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';

interface SliderOptions {
  /**
   * The minimum value of the slider.
   * @default 0
   */
  min?: number;
  /**
   * The maximum value of the slider.
   * @default 100
   */
  max?: number;
  /**
   * The default value of the slider.
   */
  defaultValue?: number;
  /**
   * The color of the track.
   */
  trackColor?: string;
  /**
   * The color of the thumb.
   */
  thumbColor?: string;
  /**
   * The color of the filled track.
   */
  filledTrackColor?: string;
}

export interface SliderProps
  extends NativeFicusProps<'Slider'>,
    SliderOptions,
    ThemingProps<'Slider'> {
  /**
   * @private
   * Use `trackColor` instead.
   */
  minimumTrackTintColor?: string;
  /**
   * @private
   * Use `filledTrackColor` instead.
   */
  maximumTrackTintColor?: string;
}

export const Slider = forwardRef<SliderProps, 'Slider'>(
  function Slider(props, ref) {
    const styles = useMultiStyleConfig('Slider', props);
    const { theme } = useTheme();
    const {
      min,
      max,
      defaultValue,
      trackColor,
      filledTrackColor,
      thumbColor,
      ...rest
    } = props;

    const sliderColors = useMemo(
      () => ({
        minimumTrackTintColor: getColor(
          trackColor ?? styles.track?.bg,
          theme.colors
        ),
        maximumTrackTintColor: getColor(
          filledTrackColor ?? styles.filledTrack?.bg,
          theme.colors
        ),
        thumbTintColor: getColor(thumbColor ?? styles.thumb?.bg, theme.colors),
      }),
      [trackColor, filledTrackColor, thumbColor, styles]
    );

    return (
      <ficus.Slider
        ref={ref}
        minimumValue={min}
        maximumValue={max}
        value={defaultValue}
        {...sliderColors}
        {...rest}
      />
    );
  }
);
