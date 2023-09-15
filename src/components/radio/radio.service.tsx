import { ThemeType } from '../../theme';
import { getThemeColor } from '../../theme/theme.service';

/**
 * get icon name to be used based on checked state
 *
 * @param checked
 */
export const getIconName = (checked: boolean = false) => {
  switch (true) {
    case checked:
      return 'radio-button-checked';
    default:
      return 'radio-button-unchecked';
  }
};

/**
 * get icon color based on state
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
