import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeFontFamily,
  getFontWeight,
  getThemeColor,
} from '../../theme/theme.service';
import type { ThemeType } from '../../theme/type';
import type { TextProps } from './text.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: TextProps) => {
  const computedStyle: any = {};

  computedStyle.text = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    flex: props.flex,
    backgroundColor: getThemeColor(theme.colors, props.bg as string),
    overflow: props.overflow || 'hidden',
    opacity: props.opacity,
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: getThemeColor(theme.colors, props.color as string),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: getThemeColor(
      theme.colors,
      (props.textDecorColor as string) || (props.textDecorationColor as string)
    ),
    textShadowColor: getThemeColor(
      theme.colors,
      props.textShadowColor as string
    ),
    ...(props.textShadowOffset?.width || props.textShadowOffset?.height
      ? {
          textShadowOffset: {
            width: props.textShadowOffset?.width,
            height: props.textShadowOffset?.height,
          },
        }
      : {}),
    textShadowRadius: getThemeProperty(
      theme.borderRadius,
      props.textShadowRadius
    ),

    fontWeight: getFontWeight(
      theme.fontFamily,
      props.fontFamily,
      props.fontWeight
    ),

    fontFamily:
      props.fontFamily ??
      getThemeFontFamily(theme.fontFamily, props.fontWeight),

    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.text = {
      ...computedStyle.text,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
