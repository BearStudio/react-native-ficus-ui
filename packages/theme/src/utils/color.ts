/* eslint-disable no-bitwise */
import { transparentize as transparentize2k } from 'color2k';

type Dict<T = any> = Record<string, T>;

/**
 * Creates a color utility function that resolves the color using a theme context.
 * @param fn - A function that takes a color string and additional arguments.
 */
function createColorUtilWithTheme<
  T extends (color: string, ...args: any[]) => any,
>(fn: T) {
  return (...args: Parameters<T>) => {
    const [color, ...restArgs] = args;

    return (theme: Dict) => {
      const resolvedColor = getColor(color, theme.colors);
      return fn(resolvedColor, ...restArgs);
    };
  };
}

export const transparentize = createColorUtilWithTheme(transparentize2k);

export function getColor(value: any, theme: Dict | undefined) {
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
}

function isValidColor(value: string): boolean {
  // TODO
  return true;
}

export function randomColorFromString(str: string) {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = '#';
  for (let j = 0; j < 3; j += 1) {
    const value = (hash >> (j * 8)) & 255;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

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
