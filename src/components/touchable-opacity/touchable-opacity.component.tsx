import * as React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

import { getStyle } from './touchable-opacity.style';
import type { TouchableOpacityProps } from '@/components';
import { useTheme } from '@/theme/theme.hook';
import { useDefaultProps } from '@/utilities/useDefaultProps';
import { handleResponsiveProps } from '@/types';

const TouchableOpacity: React.FunctionComponent<TouchableOpacityProps> = (
  incomingProps
) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'TouchableOpacity',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {}
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
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  return (
    <RNTouchableOpacity style={computedStyle.touchable} {...rest}>
      {children}
    </RNTouchableOpacity>
  );
};

// TouchableOpacity.defaultProps = {};

export { TouchableOpacity };
