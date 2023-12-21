/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import { ThemeType } from '@/theme';
import { getThemeColor, getThemeProperty } from '@/theme/theme.service';
import { CheckboxProps, Icon, Spinner, Box } from '@/components';

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
  const { size, icon, iconColor, colorScheme, isDisabled } = props;

  const iconName = getIconName(isChecked, isDisabled ?? false);
  const iconColorValue = getIconColor(isChecked, isDisabled, iconColor, theme);
  const iconSize = getThemeProperty(theme.checkbox, size);

  if (props.isLoading) {
    return (
      <Box
        w={iconSize}
        h={iconSize}
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size={size} color={`${colorScheme}.600`} />
      </Box>
    );
  }

  if (props.icon && typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        color={iconColorValue}
        style={{ zIndex: 2, position: 'relative' }}
        fontFamily="AntDesign"
        fontSize={iconSize}
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
      fontSize={iconSize}
    />
  );
};
