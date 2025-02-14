import { createContext } from 'react';

import { theme } from '.';
import { FicusTheme } from './theme.types';

export interface ThemeContext {
  theme: FicusTheme;
  setTheme: (theme: FicusTheme) => void;
  windowWidth: number;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: theme as FicusTheme,
  setTheme: (_theme: FicusTheme) => {},
  windowWidth: 0,
});
