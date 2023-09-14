/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { ThemeType } from '../..//theme';
import { Icon } from '../icon/icon.component';
import { CheckboxProps } from './checkbox.type';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';

/**
 * get icon name based on state
 */
export const getIconName = (
  isChecked: boolean = false,
  isDisabled: boolean = false
) => {
  switch (true) {
    case isDisabled:
      return 'indeterminate-check-box';
    case isChecked:
      return 'check-box';
    default:
      return 'check-box-outline-blank';
  }
};

/**
 * get icon name
 *
 * @param checked
 * @param disabled
 */
export const getIconColor = (
  isChecked: any,
  isDisabled: any,
  iconColor: any,
  theme: ThemeType
) => {
  switch (true) {
    case isDisabled:
      return getThemeColor(theme.colors, 'transparent');
    case isChecked:
      return getThemeColor(theme.colors, iconColor);
    default:
      return getThemeColor(theme.colors, 'transparent');
  }
};

/*
 * get icon
 * shows activity indication if loading state is true
 */
export const getIcon = (
  theme: ThemeType,
  props: CheckboxProps,
  isChecked: boolean
) => {
  const { fontSize, icon, iconColor, colorScheme, isDisabled } = props;

  const iconName = getIconName(isChecked, isDisabled ?? false);
  const iconColorValue = getIconColor(isChecked, isDisabled, iconColor, theme);

  const colorValue = getThemeColor(theme.colors, `${colorScheme}.600`);

  if (props.isLoading) {
    return (
      <ActivityIndicator
        size={getThemeProperty(theme.fontSize, fontSize)}
        color={colorValue}
        style={{ zIndex: 2, position: 'relative' }}
      />
    );
  }

  if (props.icon && typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        color={iconColorValue}
        style={{ zIndex: 2, position: 'relative' }}
        fontFamily="AntDesign"
        fontSize={fontSize}
      />
    );
  }

  if (props.icon) {
    return icon;
  }

  return (
    <Icon
      name={iconName}
      color={`${colorScheme}.600`}
      style={{ zIndex: 2, position: 'relative' }}
      fontFamily="MaterialIcons"
      fontSize={fontSize}
    />
  );
};
