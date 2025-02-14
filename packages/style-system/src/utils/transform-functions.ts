import { Dict } from './types';

export const transforms = {
  getThemeProp(value: any, theme: Dict | undefined) {
    if (theme?.[value]) {
      return theme[value];
    }

    return value;
  },

  // getFontWeight(
  //   themeFontFamily: ThemeType['fontFamily'],
  //   fontFamily: TextProps['fontFamily'],
  //   fontWeight: Dict | undefined
  // ) {
  //   if (fontFamily === '' || !fontWeight) {
  //     return fontWeight;
  //   }

  //   if (themeFontFamily) {
  //     if (
  //       typeof themeFontFamily[fontWeight as keyof TextProps['fontWeight']] !==
  //       'undefined'
  //     ) {
  //       return 'normal';
  //     }
  //   }

  //   if (!fontFamily) {
  //     return fontWeight;
  //   }

  //   return 'normal';
  // },

  // getThemeFontFamily(
  //   value: any,
  //   themeFontFamily: ThemeType['fontFamily'],
  //   fontWeight: TextProps['fontWeight'] = 'normal'
  // ): string | undefined {
  //   if (themeFontFamily) {
  //     if ((fontWeight as string) in themeFontFamily) {
  //       return themeFontFamily[fontWeight as keyof TextProps['fontWeight']];
  //     }
  //   }

  //   return undefined;
  // },

  getThemeColor(value: any, theme: Dict | undefined) {
    let colorValueResult: string | String = value as string;

    if (theme && value) {
      // Check if color value is a valid theme color
      if (
        theme.hasOwnProperty(value) &&
        (typeof theme[value] === 'string' || theme[value] instanceof String)
      ) {
        const colorValue: string | String = theme[value] as string;
        return colorValue as string;
      }

      // If color value contains dots, check into theme sub objects if it's a valid theme color
      if (value.includes('.')) {
        const keyParts = value.split('.');
        let subPropertyValue: any = theme;
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

    return isValidColor(colorValueResult as string)
      ? (colorValueResult as string)
      : 'transparent';
  },
};

export const isValidColor = (color: string): boolean => {
  // TODO
  return typeof color === 'string';
};
