import * as React from 'react';

import { defaultTheme } from './theme.default';
import type { ThemeType } from './type';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  windowWidth: number;
}

export const ThemeContext: React.Context<ThemeContextType> =
  React.createContext({
    theme: defaultTheme,
    setTheme: (_theme: ThemeType) => {},
    windowWidth: 0,
  });
