import { isObject } from '@chakra-ui/utils';

import { Dict } from './types';

/**
 *  Get the value for a prop with responsive value
 */
export const expandResponsive = (styles: Dict) => (theme: Dict) => {
  // FIXME: Move this at a higher level (theme provider ?) and include it in the theme as a 'metadata' to reduce computation costs
  const breakpoints = theme?.breakpoints
    ? Object.entries(theme.breakpoints as Dict<number>).sort(
        (a, b) => a[1] - b[1]
      )
    : [];

  const windowWidth = theme?.__windowWidth;
  const computedStyles: Dict = {};

  for (const key in styles) {
    let value = styles[key];

    computedStyles[key] = value;

    if (value === null) {
      continue;
    }

    // FIXME: Parsing of breakpoints
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
