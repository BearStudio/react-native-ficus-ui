import { StyleSheet } from 'react-native';

import {
  createShadowStyles,
  createPositionStyle,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
  getThemeProperty,
  getFontWeight,
  getThemeFontFamily,
} from '../../theme/theme.service';
import type { BadgeProps } from './badge.type';
import type { ThemeType } from '../../theme/type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: BadgeProps) => {
  const computedStyle: any = {};

  const badgeBgColor =
    props.variant === 'subtle'
      ? getThemeColor(theme.colors, `${props.colorScheme}.100`)
      : props.variant === 'solid'
      ? getThemeColor(theme.colors, `${props.colorScheme}.500`)
      : 'transparent';

  const badgeTextColor =
    props.variant === 'subtle'
      ? getThemeColor(theme.colors, `${props.colorScheme}.800`)
      : props.variant === 'solid'
      ? 'white'
      : props.variant === 'outline'
      ? getThemeColor(theme.colors, `${props.colorScheme}.500`)
      : getThemeColor(theme.colors, `${props.colorScheme}.800`);

  computedStyle.badge = {
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
    backgroundColor: props.bg
      ? getThemeColor(theme.colors, props.bg as string)
      : badgeBgColor,
    flex: props.flex,
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (props.variant === 'outline') {
    computedStyle.badge = {
      ...computedStyle.badge,
      borderColor: badgeTextColor,
      borderWidth: 1,
      padding: computedStyle.badge?.padding
        ? computedStyle.badge?.padding - 1
        : null,
      paddingVertical: computedStyle.badge?.paddingVertical
        ? computedStyle.badge?.paddingVertical - 1
        : null,
      paddingHorizontal: computedStyle.badge?.paddingHorizontal
        ? computedStyle.badge?.paddingHorizontal - 1
        : null,
      paddingLeft: computedStyle.badge?.paddingLeft
        ? computedStyle.badge?.paddingLeft - 1
        : null,
      paddingRight: computedStyle.badge?.paddingRight
        ? computedStyle.badge?.paddingRight - 1
        : null,
      paddingTop: computedStyle.badge?.paddingTop
        ? computedStyle.badge?.paddingTop - 1
        : null,
      paddingBottom: computedStyle.badge?.paddingBottom
        ? computedStyle.badge?.paddingBottom - 1
        : null,
    };
  }

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.badge = {
      ...computedStyle.badge,
      // @ts-ignore
      ...props.style,
    };
  }

  computedStyle.text = {
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: props.color
      ? getThemeColor(theme.colors, props.color as string)
      : badgeTextColor,
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
  };

  return StyleSheet.create(computedStyle);
};
