import { StyleSheet } from 'react-native';

import {
  createShadowStyles,
  createPositionStyle,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import type { FlexProps } from './flex.type';
import type { ThemeType } from '../../theme/type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: FlexProps) => {
  const computedStyle: any = {};

  computedStyle.flex = {
    flexDirection: props.row ? 'row' : props.flexDirection,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    flex: props.flex,
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.flex = {
      ...computedStyle.flex,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
