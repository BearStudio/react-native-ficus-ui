import * as React from 'react';

import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  View,
} from 'react-native';

import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './touchable-without-feedback.style';
import type { TouchableWithoutFeedbackProps } from './touchable-without-feedback.type';

const TouchableWithoutFeedback: React.FunctionComponent<
  TouchableWithoutFeedbackProps
> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'TouchableWithoutFeedback',
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
    boxShadow,
    filter,
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
    <RNTouchableWithoutFeedback {...rest}>
      <View style={computedStyle.touchable}>{children}</View>
    </RNTouchableWithoutFeedback>
  );
};

// TouchableWithoutFeedback.defaultProps = {};

export { TouchableWithoutFeedback };
