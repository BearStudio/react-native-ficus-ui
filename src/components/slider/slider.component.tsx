import * as React from 'react';
import RNSlider from '@react-native-community/slider';

import { getStyle } from './slider.style';
import type { SliderProps } from './slider.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import { getThemeColor } from '../../theme/theme.service';

const Slider: React.FunctionComponent<SliderProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Slider',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      min: 0,
      max: 1,
      filledTrackColor: 'gray.200',
      colorScheme: 'blue',
    }
  );

  const {
    bg,
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
    children,
    bgImg,
    bgMode,
    alignItems,
    align,
    justifyContent,
    justify,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    opacity,
    top,
    left,
    right,
    bottom,
    zIndex,
    min,
    max,
    colorScheme,
    filledTrackColor,
    defaultValue,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  return (
    <RNSlider
      minimumValue={min}
      maximumValue={max}
      value={defaultValue}
      minimumTrackTintColor={getThemeColor(theme.colors, `${colorScheme}.500`)}
      maximumTrackTintColor={getThemeColor(theme.colors, filledTrackColor)}
      thumbTintColor="white"
      style={computedStyle.slider}
      {...rest}
    />
  );
};

export { Slider };
