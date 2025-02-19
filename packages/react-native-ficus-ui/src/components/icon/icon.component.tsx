import * as React from 'react';

import { View as RNView } from 'react-native';

import { useTheme } from '../../theme';
import { getThemeColor, getThemeProperty } from '../../theme/theme.service';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getIconSet } from './icon.service';
import { getStyle } from './icon.style';
import { IconProps } from './icon.type';

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
    boxShadow,
    filter,
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
