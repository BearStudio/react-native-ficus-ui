import { StyleSheet } from 'react-native';

import { ThemeType } from '../../theme';
import {
  createBorderColorStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createPositionStyle,
  createShadowStyles,
  createSpacingStyles,
  getThemeColor,
  getThemeProperty,
} from '../../theme/theme.service';
import { ButtonProps } from './button.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: ButtonProps) => {
  const computedStyle: any = {};

  const buttonBgColor = props.bg
    ? getThemeColor(theme.colors, props.bg as string)
    : props.variant === 'solid'
      ? getThemeColor(theme.colors, `${props.colorScheme}.500`)
      : 'transparent';

  const buttonTextColor = props.color
    ? getThemeColor(theme.colors, props.color as string)
    : props.variant === 'outline' ||
        props.variant === 'ghost' ||
        props.variant === 'link'
      ? getThemeColor(theme.colors, `${props.colorScheme}.500`)
      : 'white';

  computedStyle.button = {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h || getThemeProperty(theme.button, props.size)?.height,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    borderStyle: props.borderStyle,
    paddingHorizontal: getThemeProperty(theme.button, props.size)
      ?.paddingHorizontal,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    ...(props.isRound ? { borderRadius: 999999 } : {}),
    backgroundColor: buttonBgColor,
  };

  if (props.variant === 'outline') {
    computedStyle.button = {
      ...computedStyle.button,
      borderColor: buttonTextColor,
      borderWidth: 1,
      padding: computedStyle.button?.padding
        ? computedStyle.button?.padding - 1
        : null,
      paddingVertical: computedStyle.button?.paddingVertical
        ? computedStyle.button?.paddingVertical - 1
        : null,
      paddingHorizontal: computedStyle.button?.paddingHorizontal
        ? computedStyle.button?.paddingHorizontal - 1
        : null,
      paddingLeft: computedStyle.button?.paddingLeft
        ? computedStyle.button?.paddingLeft - 1
        : null,
      paddingRight: computedStyle.button?.paddingRight
        ? computedStyle.button?.paddingRight - 1
        : null,
      paddingTop: computedStyle.button?.paddingTop
        ? computedStyle.button?.paddingTop - 1
        : null,
      paddingBottom: computedStyle.button?.paddingBottom
        ? computedStyle.button?.paddingBottom - 1
        : null,
    };
  }

  computedStyle.text = {
    color: buttonTextColor,
    fontSize: getThemeProperty(theme.button, props.size)?.fontSize,
  };

  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center',
  };

  computedStyle.container = {
    flexDirection: props.direction || props.flexDirection,
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

  if (props.isDisabled) {
    computedStyle.button = {
      ...computedStyle.button,
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
