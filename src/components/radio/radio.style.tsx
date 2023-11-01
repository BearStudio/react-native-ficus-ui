import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createShadowStyles,
  createSpacingStyles,
  createPositionStyle,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { RadioProps } from './radio.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: RadioProps) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg as string),
  };

  computedStyle.text = {
    fontWeight: props.fontWeight,
    color: getThemeColor(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
  };

  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: getThemeProperty(theme.fontSize, props.size) * 1.2,
  };

  computedStyle.container = {
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    position: 'relative',
  };

  if (props.full) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
      alignSelf: 'stretch',
    };

    computedStyle.button = {
      ...computedStyle.button,
      alignSelf: 'stretch',
    };
  }

  computedStyle.icon = {
    zIndex: 2,
  };

  if (props.disabled) {
    computedStyle.icon = {
      ...computedStyle.icon,
      opacity: 0.5,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
