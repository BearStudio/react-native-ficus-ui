/* eslint-disable no-bitwise */
import { StyleSheet } from 'react-native';

import {
  createAvatarStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createPositionStyle,
  createShadowStyles,
  createSpacingStyles,
  getFontWeight,
  getThemeColor,
  getThemeFontFamily,
  getThemeProperty,
} from '../../theme/theme.service';
import type { ThemeType } from '../../theme/type';
import type { AvatarProps } from './avatar.type';

const AVATAR_BADGE_RATIO = 2.5;

const stringToColor = (str: string) => {
  // Step 1: Create a hash from the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Step 2: Convert the hash into a color code (in hex format)
  let color = '#';
  for (let i = 0; i < 3; i++) {
    // Bitwise operation to get the first 3 bytes and map it to a valid hex value
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
};

const lightenColor = (color: string, percent: number) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const darkenColor = (color: string, percent: number) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: AvatarProps) => {
  const computedStyle: any = {};

  computedStyle.avatar = {
    flexDirection: props.direction ? props.direction : props.flexDirection,
    flexWrap: props.wrap ? props.wrap : props.flexWrap,
    alignItems: props.align ? props.align : props.alignItems,
    justifyContent: props.justify ? props.justify : props.justifyContent,
    flexBasis: props.basis ? props.basis : props.flexBasis,
    flexGrow: props.grow ? props.grow : props.flexGrow,
    flexShrink: props.shrink ? props.shrink : props.flexShrink,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow || 'hidden',
    zIndex: props.zIndex,
    elevation: props.elevation,
    flex: props.flex,
    ...createAvatarStyles(props, theme.avatar),
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.avatar = {
      ...computedStyle.avatar,
      // @ts-ignore
      ...props.style,
    };
  }

  computedStyle.avatarImage = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderWidthStyles(props),
    borderStyle: props.borderStyle,
    backgroundColor: props.bg
      ? getThemeColor(theme.colors, props.bg as string)
      : props.colorScheme
        ? getThemeColor(theme.colors, `${props.colorScheme}.300`)
        : props.name
          ? lightenColor(stringToColor(props.name), 30)
          : getThemeColor(theme.colors, 'gray.300'),
  };

  computedStyle.text = {
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: props.color
      ? getThemeColor(theme.colors, props.color as string)
      : props.colorScheme
        ? getThemeColor(theme.colors, `${props.colorScheme}.800`)
        : props.name
          ? darkenColor(stringToColor(props.name), 40)
          : getThemeColor(theme.colors, 'gray.800'),
    fontSize: props.fontSize
      ? getThemeProperty(theme.fontSize, props.fontSize)
      : getThemeProperty(theme.avatar, props.size) / 2,
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

  computedStyle.avatarBadge = {
    position: 'absolute',
    w: computedStyle.avatar.width / AVATAR_BADGE_RATIO,
    h: computedStyle.avatar.height / AVATAR_BADGE_RATIO,
    left:
      computedStyle.avatar.width -
      computedStyle.avatar.width / AVATAR_BADGE_RATIO,
    top:
      computedStyle.avatar.height -
      computedStyle.avatar.height / AVATAR_BADGE_RATIO,
  };

  return StyleSheet.create(computedStyle);
};
