import color from 'color';

import { getThemeColor } from '../../theme/theme.service';
import { ButtonProps } from './button.type';
import { ThemeType } from '../../theme/type';

/**
 * returns underlay color
 *
 * @param theme
 * @param props
 */
export const getUnderlayColor = (theme: ThemeType, props: ButtonProps) => {
  return props.underlayColor
    ? getThemeColor(theme.colors, props.underlayColor as string)
    : props.colorScheme
    ? getThemeColor(theme.colors, `${props.colorScheme}.800`)
    : color(getThemeColor(theme.colors, props.bg as string))
        .darken(0.1)
        .rgb()
        .string();
};

/**
 * return ripple color
 *
 * @param theme
 * @param props
 */
export const getRippleColor = (theme: ThemeType, props: ButtonProps) => {
  return color(getThemeColor(theme.colors, props.rippleColor as string))
    .alpha(props.disabled ? 0 : 0.2)
    .rgb()
    .string();
};
