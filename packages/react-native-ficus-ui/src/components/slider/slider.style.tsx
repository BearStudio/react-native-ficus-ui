import { StyleSheet } from 'react-native';

import {
  createPositionStyle,
  createSpacingStyles,
  getThemeColor,
} from '../../theme/theme.service';
import type { ThemeType } from '../../theme/type';
import type { SliderProps } from './slider.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: SliderProps) => {
  const computedStyle: any = {};

  computedStyle.slider = {
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
    zIndex: props.zIndex,
    backgroundColor: getThemeColor(theme.colors, props.bg as string),
    flex: props.flex,
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme.spacing),
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.slider = {
      ...computedStyle.slider,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
