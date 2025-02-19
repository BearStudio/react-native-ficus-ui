import * as React from 'react';

import { Text as RNText } from 'react-native';

import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './text.style';
import type { TextProps } from './text.type';

const Text: React.FunctionComponent<TextProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Text',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      color: 'gray.900',
      textAlign: 'auto',
      textTransform: 'none',
      fontSize: 'md',
      overflow: 'hidden',
      textAlignVertical: 'center',
    }
  );

  const {
    w,
    h,
    bg,
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
    flex,
    minH,
    minW,
    color,
    fontSize,
    children,
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
    overflow,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

// Text.defaultProps = {
//   color: 'gray.900',
//   textAlign: 'auto',
//   textTransform: 'none',
//   fontSize: 'md',
//   overflow: 'hidden',
// };

export { Text };
