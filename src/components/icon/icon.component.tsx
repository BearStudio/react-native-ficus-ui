import * as React from 'react';
import { View as RNView } from 'react-native';

import { getStyle } from './icon.style';
import { getIconSet } from './icon.service';
import { useTheme } from '../../theme';
import { IconProps } from './icon.type';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';

const Icon: React.FunctionComponent<IconProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'Icon',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      color: 'gray.500',
      fontSize: 'md',
      fontFamily: 'AntDesign',
    }
  );

  const {
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
    h,
    w,
    bg,
    position,
    left,
    top,
    bottom,
    right,
    name,
    color,
    maxH,
    maxW,
    minW,
    minH,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    shadow,
    shadowColor,
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
    fontFamily,
    fontSize,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);

  const IconComponent = getIconSet(fontFamily);

  return (
    <RNView style={computedStyle.container} {...rest}>
      <IconComponent
        color={getThemeColor(theme.colors, color)}
        size={getThemeProperty(theme.fontSize, fontSize)}
        name={name}
        style={computedStyle.icon}
      />
    </RNView>
  );
};

// Icon.defaultProps = {
//   color: 'gray.500',
//   fontSize: 'md',
//   fontFamily: 'AntDesign',
// };

export { Icon };
