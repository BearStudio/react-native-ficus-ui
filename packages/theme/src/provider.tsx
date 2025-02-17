import { FC, ReactNode, useMemo, useState } from 'react';

import deepmerge from 'deepmerge';
import { useWindowDimensions } from 'react-native';

import { ThemeContext } from './context';
import { theme } from './theme.default';
import { FicusTheme } from './theme.types';

export interface ThemeProviderProps {
  theme?: FicusTheme;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { theme: customTheme = {}, children } = props;
  const { width: windowWidth } = useWindowDimensions();

  const [themeState, setThemeState] = useState<FicusTheme>(
    deepmerge(theme, customTheme)
  );

  const setTheme = (newTheme: FicusTheme) => {
    const mergedTheme = deepmerge(theme, newTheme);
    setThemeState(mergedTheme);
  };

  const contextValue = useMemo(
    () => ({ theme: themeState, setTheme, windowWidth }),
    [themeState, windowWidth]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
