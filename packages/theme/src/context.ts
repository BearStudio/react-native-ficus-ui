import { createContext } from 'react';

import { theme } from './theme.default';
import { FicusTheme } from './theme.types';

export interface FicusThemeWithMetadata extends FicusTheme {
  /**
   * Current device window width. Useful for responsive layouts
   */
  __windowWidth?: number;
  /**
   * Breakpoints from the theme ordered by ascending size
   */
  __breakpoints?: [string, number][];
}

export interface ThemeContext {
  theme: FicusThemeWithMetadata;
  setTheme: (theme: FicusThemeWithMetadata) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: Object.assign(theme, { __windowWidth: 0 }),
  setTheme: (_theme: FicusThemeWithMetadata) => {},
});
