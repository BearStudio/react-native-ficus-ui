import { StyleSheet } from 'react-native';

import {
  createBorderColorStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createPositionStyle,
  createShadowStyles,
  createSpacingStyles,
  getThemeColor,
} from '../../theme/theme.service';
import type { ThemeType } from '../../theme/type';
import type { DividerProps } from './divider.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: DividerProps) => {
  const computedStyle: any = {};

  computedStyle.divider = {
    flexDirection: props.direction ? props.direction : props.flexDirection,
    flexWrap: props.wrap ? props.wrap : props.flexWrap,
    alignItems: props.align ? props.align : props.alignItems,
    justifyContent: props.justify ? props.justify : props.justifyContent,
    flexBasis: props.basis ? props.basis : props.flexBasis,
    flexGrow: props.grow ? props.grow : props.flexGrow,
    flexShrink: props.shrink ? props.shrink : props.flexShrink,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow || 'hidden',
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    borderColor: getThemeColor(theme.colors, `${props.colorScheme}.400`),
    borderTopWidth: props.orientation === 'horizontal' ? props.size : 0,
    borderLeftWidth: props.orientation === 'vertical' ? props.size : 0,
    flex: props.flex,
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.divider = {
      ...computedStyle.divider,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
