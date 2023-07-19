import * as React from 'react';
import { View as RNView } from 'react-native';

import { getStyle } from './stack.style';
import type { StackProps } from './stack.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Stack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const props = useDefaultProps('Stack', incomingProps, {
    bg: 'transparent',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    spacing: 0,
  });

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
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    spacing,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return (
    <RNView style={computedStyle.stack} {...rest}>
      {children && Array.isArray(children)
        ? children.map((item, index) => (
            <RNView key={`stack-${index}`}>
              {item}
              {index !== children.length - 1 ? (
                <RNView style={computedStyle.stackSpacing} />
              ) : null}
            </RNView>
          ))
        : children}
    </RNView>
  );
};

// Stack.defaultProps = {
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
//   spacing: 0,
// };

export { Stack };
