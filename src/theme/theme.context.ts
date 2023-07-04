import * as React from 'react';
import type { ThemeType } from './type';
import { defaultTheme } from './theme.default';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  {
    theme: defaultTheme,
    setTheme: (_theme: ThemeType) => {},
  }
);
