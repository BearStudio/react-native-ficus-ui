import * as React from 'react';

import { View as RNView, Text } from 'react-native';

import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './badge.style';
import type { BadgeProps } from './badge.type';

const Badge: React.FunctionComponent<BadgeProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Badge',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      colorScheme: 'gray',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderRadius: 'sm',
      shadow: 'none',
      position: 'relative',
      bgMode: 'cover',
      pointerEvents: 'auto',
      borderStyle: 'solid',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      px: 4,
      py: 2,
      variant: 'subtle',
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
    bgImg,
    bgMode,
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
    color,
    fontSize,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecorColor,
    textDecorStyle,
    fontStyle,
    textDecorLine,
    textAlignVertical,
    colorScheme,
    variant,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  return (
    <RNView style={computedStyle.badge} {...rest}>
      <Text style={computedStyle.text}>{children}</Text>
    </RNView>
  );
};

// Badge.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
// };

export { Badge };
