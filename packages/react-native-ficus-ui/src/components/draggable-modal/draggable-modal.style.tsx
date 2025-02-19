import { StyleSheet } from 'react-native';

import { ThemeType } from '../../theme';
import {
  createBorderColorStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createSpacingStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { DraggableModalProps } from './draggable-modal.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: DraggableModalProps) => {
  const computedStyle: any = {};

  computedStyle.modal = {
    margin: 0,
    justifyContent: props.justifyContent,
  };

  computedStyle.container = {
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg as string),
  };

  computedStyle.safeView = {
    flex: 1,
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.modal = {
      ...computedStyle.modal,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
