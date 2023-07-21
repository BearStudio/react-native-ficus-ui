import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { getStyle } from './spinner.style';
import type { SpinnerProps } from './spinner.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getThemeColor, getThemeProperty } from '../../theme/theme.service';

const Spinner: React.FunctionComponent<SpinnerProps> = (incomingProps) => {
  const props = useDefaultProps('Spinner', incomingProps, {});

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
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    children,
    alignItems,
    align,
    justifyContent,
    justify,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    color,
    size,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);
  const colorProp = props.color as string | undefined;
  const colorValue = getThemeColor(theme.colors, colorProp);
  const sizeValue = getThemeProperty(theme.spinner, props.size);

  return (
    <ActivityIndicator
      style={computedStyle.spinner}
      color={colorValue}
      size={sizeValue}
      {...rest}
    />
  );
};

// Spinner.defaultProps = {};

export { Spinner };
