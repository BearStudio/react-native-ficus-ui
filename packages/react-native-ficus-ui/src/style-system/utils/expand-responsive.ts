import { isObject } from '@chakra-ui/utils';

import { Dict } from './types';

/**
 *  Resolve all the responsive property values as a single value depending on current device's windowWidth
 */
export const expandResponsive = (styles: Dict) => (theme: Dict) => {
  const windowWidth = theme?.__windowWidth;
  const computedStyles: Dict = {};

  for (const key in styles) {
    let value = styles[key];

    computedStyles[key] = value;

    if (value === null) {
      continue;
    }

    /**
     * For responsive values with `{base: 0, xs: 2}` format
     */
    if (isObject(value)) {
      for (const breakpoint in value) {
        if (
          theme?.breakpoints[breakpoint] === undefined ||
          theme?.breakpoints[breakpoint] === null
        ) {
          continue;
        }

        const currentBreakpointValue = theme?.breakpoints[breakpoint];

        if (windowWidth >= currentBreakpointValue) {
          computedStyles[key] = value[breakpoint];
        }
      }
      continue;
    }

    /**
     * Breakpoints ordered by ascending size
     */
    const breakpoints = theme?.__breakpoints;

    /**
     * For responsive values with `[0, 2]` format
     */
    if (Array.isArray(value)) {
      // Defaults to the first value of the array
      let matchedValue = value[0];

      for (let i = 0; i < breakpoints.length; i++) {
        const [, minWidth] = breakpoints[i]!;

        if (windowWidth >= minWidth) {
          matchedValue =
            value[i] !== undefined && value[i] !== null
              ? value[i]
              : matchedValue;
        }
      }

      computedStyles[key] = matchedValue;
    }
  }

  return computedStyles;
};
