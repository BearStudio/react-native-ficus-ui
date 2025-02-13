import { StyleSheet } from 'react-native';

import { ThemeType } from '../../theme';
import {
  createBorderRadiusStyles,
  createSpacingStyles,
} from '../../theme/theme.service';
import { SwitchProps } from './switch.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: SwitchProps) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: 'row',
    height: props.h,
    width: props.w,
    alignItems: 'center',
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.circle = {
    // @ts-ignore
    height: props.thumbSize,
    // @ts-ignore
    width: props.thumbSize,
    // @ts-ignore
    borderRadius: Math.max(props.thumbSize / 2, 2),
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
