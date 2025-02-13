import * as React from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { getStyle } from './center.style';
import type { CenterProps } from './center.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';

const Center: React.FunctionComponent<CenterProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Center',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'transparent',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderRadius: 'none',
      shadow: 'none',
      position: 'relative',
      bgMode: 'cover',
      pointerEvents: 'auto',
      borderStyle: 'solid',
      justifyContent: 'center',
      alignItems: 'center',
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
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  // if there is a bgImage prop, use ImageBackground
  // instead of regular View component
  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.center}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
        {...rest}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <RNView style={computedStyle.center} {...rest}>
      {children}
    </RNView>
  );
};

// Center.defaultProps = {
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

export { Center };
