import { isValidElement } from 'react';

import { StyleSheet } from 'react-native';

import { ThemeType } from '../../theme';
import {
  createBorderColorStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createFlexStyles,
  createPositionStyle,
  createShadowStyles,
  createSpacingStyles,
  getFontWeight,
  getThemeColor,
  getThemeFontFamily,
  getThemeProperty,
} from '../../theme/theme.service';
import { InputProps } from './input.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: InputProps, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: props.zIndex,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    width: props.w,
    height: props.h,
    opacity: props.opacity,
    backgroundColor: getThemeColor(theme.colors, props.bg as string),
    ...createFlexStyles(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (state.isFocused) {
    computedStyle.container = {
      ...computedStyle.container,
      borderColor: getThemeColor(
        theme.colors,
        props.focusBorderColor
          ? props.focusBorderColor
          : computedStyle.container.borderColor
      ),
      borderWidth: props.focusBorderWidth,
      borderStyle: props.focusBorderStyle,
    };
  }

  computedStyle.marginContainer = {
    padding: state.isFocused
      ? 0
      : (props.focusBorderWidth as number) - (props.borderWidth as number),
  };

  computedStyle.input = {
    flex: 1,
    padding: 0,
    margin: state.isFocused && state.isTextarea ? -1 : 0,

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

    borderWidth: 0,
  };

  computedStyle.suffix = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:
      props.suffix &&
      isValidElement(props.suffix) &&
      props.suffix.props.alignSelf
        ? props.suffix.props.alignSelf
        : 'center',
    marginLeft: 5,
  };

  computedStyle.prefix = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    alignSelf:
      props.prefix &&
      isValidElement(props.prefix) &&
      props.prefix.props.alignSelf
        ? props.prefix.props.alignSelf
        : 'center',
  };

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
