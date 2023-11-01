import * as React from 'react';
import { TouchableHighlight as RNTouchableHighlight } from 'react-native';

import { getStyle } from './touchable-highlight.style';
import type { TouchableHighlightProps } from './touchable-highlight.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';

const TouchableHighlight: React.FunctionComponent<TouchableHighlightProps> = (
  incomingProps
) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'TouchableHighlight',
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
    <RNTouchableHighlight style={computedStyle.touchable} {...rest}>
      {children}
    </RNTouchableHighlight>
  );
};

// TouchableHighlight.defaultProps = {};

export { TouchableHighlight };
