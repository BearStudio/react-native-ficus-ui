import * as React from 'react';

import {
  ImageBackground as RNImageBackground,
  View as RNView,
} from 'react-native';

import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './flex.style';
import type { FlexProps } from './flex.type';

const Flex: React.FunctionComponent<FlexProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Flex',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'transparent',
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      borderRadius: 'none',
      shadow: 'none',
      position: 'relative',
      bgMode: 'cover',
      pointerEvents: 'auto',
      borderStyle: 'solid',
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
        style={computedStyle.flex}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
        {...rest}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <RNView style={computedStyle.flex} {...rest}>
      {children}
    </RNView>
  );
};

// Flex.defaultProps = {
//   flex: 1,
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

export { Flex };
