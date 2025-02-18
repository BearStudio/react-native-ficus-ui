import { Dict } from './types';

// NOTE: This function are taken from Magnus and could probably be improved
export const transforms = {
  getThemeProp(value: any, themeScope: Dict | undefined) {
    if (themeScope?.[value]) {
      return themeScope[value];
    }

    return value;
  },
  getFontWeight(
    value: {
      fontWeight: string | number;
      fontFamily?: string;
    },
    themeScope: Dict
  ) {
    const fontFamilyKey = value.fontFamily ?? '';
    const fontFamily = themeScope.fontFamily?.[fontFamilyKey];

    if (fontFamily) {
      return 'normal';
    }

    const resolvedFontWeight = resolveFontWeight(value.fontWeight, themeScope);

    return resolvedFontWeight;
  },
  getThemeFontFamily(
    value: {
      fontFamily: string;
      fontWeight?: string | number;
    },
    themeScope: Dict
  ): string | undefined {
    const rawFontWeight = value.fontWeight;
    const rawFontFamily = value.fontFamily;

    const fontFamily = themeScope.fontFamily?.[rawFontFamily] ?? {};

    const resolvedFontWeight = resolveFontWeight(rawFontWeight, themeScope);

    return fontFamily[resolvedFontWeight] ?? rawFontFamily;
  },
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

const resolveFontWeight = (
  fontWeight: string | number = 'normal',
  themeScope: Dict
) => {
  return (
    // If font weight is a keyword (`light  `, `normal`, ...) map it to a number (300, 400)
    themeScope.fontWeights[fontWeight] ??
    // If font weight is already number (300, 400)
    fontWeight
  );
};
