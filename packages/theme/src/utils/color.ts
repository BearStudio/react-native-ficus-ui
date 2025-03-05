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
