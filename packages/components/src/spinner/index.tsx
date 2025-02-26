import { useTheme } from '@ficus-ui/theme';

import { type NativeFicusProps, ficus } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

// export const Spinner = ficus('ActivityIndicator'); // something wrong with ficus making color return undefined but size still working correctly

/** ... */
export const Spinner = (props: SpinnerProps) => {
  const { theme } = useTheme();
  const color = getThemeColor(theme.colors, props.color);

  return <ficus.ActivityIndicator {...props} color={color} />;
};

export const getThemeColor = (
  themeColors: any,
  value: string | any | undefined
): string => {
  let colorValueResult: string | String = value as string;

  if (themeColors && value) {
    // Check if color value is a valid theme color
    if (
      themeColors.hasOwnProperty(value) &&
      (typeof themeColors[value] === 'string' ||
        themeColors[value] instanceof String)
    ) {
      const colorValue: string | String = themeColors[value] as string;
      return colorValue as string;
    }

    // If color value contains dots, check into theme sub objects if it's a valid theme color
    if (value?.includes('.')) {
      const keyParts = value.split('.');
      let subPropertyValue: any = themeColors;
      for (const part of keyParts) {
        if (subPropertyValue && part) {
          subPropertyValue = subPropertyValue[part];
        }
      }
      if (
        typeof subPropertyValue === 'string' ||
        subPropertyValue instanceof String
      ) {
        colorValueResult = subPropertyValue;
      }
    }
  }

  return colorValueResult as string;
};
