import { isValidColor } from './utilities';


/**
 * Get real theme color value
 *
 * @param themeColors
 * @param value
 */
export const getThemeColor = (
  themeColors: any,
  value: string | undefined
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
    if (value.includes('.')) {
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

  return isValidColor(colorValueResult as string)
    ? (colorValueResult as string)
    : 'transparent';
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
export const getThemeProperty = (
  theme:any,
  value: any
) => {
  if (theme) {
    if (typeof theme[value] !== 'undefined') {
      return theme[value];
    }
  }
  return value;
};



export const stringToColor = (str: string) => {
  // Step 1: Create a hash from the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Step 2: Convert the hash into a color code (in hex format)
  let color = '#';
  for (let i = 0; i < 3; i++) {
    // Bitwise operation to get the first 3 bytes and map it to a valid hex value
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
};

export const lightenColor = (color: string, percent: number) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export const darkenColor = (color: string, percent: number) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};