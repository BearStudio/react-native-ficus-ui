import * as React from 'react';

import { View as RNView } from 'react-native';

import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './divider.style';
import type { DividerProps } from './divider.type';

const Divider: React.FunctionComponent<DividerProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Divider',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderRadius: 'none',
      shadow: 'none',
      position: 'relative',
      pointerEvents: 'auto',
      borderStyle: 'solid',
      colorScheme: 'gray',
      orientation: 'horizontal',
      size: 1,
    }
  );

  const {
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

  return <RNView style={computedStyle.divider} {...rest} />;
};

// Divider.defaultProps = {
// flexDirection: 'column',
// flexWrap: 'nowrap',
// borderRadius: 'none',
// shadow: 'none',
// position: 'relative',
// pointerEvents: 'auto',
// borderStyle: 'solid',
// h: 2,
// colorScheme: 'gray',
// };

export { Divider };
