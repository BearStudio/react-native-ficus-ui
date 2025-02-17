import { FC, ReactNode, useMemo, useState } from 'react';

import deepmerge from 'deepmerge';
import { useWindowDimensions } from 'react-native';

import { FicusThemeWithMetadata, ThemeContext } from './context';
import { theme } from './theme.default';

export interface ThemeProviderProps {
  theme?: FicusThemeWithMetadata;
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { theme: customTheme = {}, children } = props;

  // Get Metadata
  const { width: windowWidth } = useWindowDimensions();
  const breakpoints = theme?.breakpoints
    ? Object.entries(theme.breakpoints).sort((a, b) => a[1] - b[1])
    : [];

  // Add metadata to the theme
  const themeWithMetadata: FicusThemeWithMetadata = Object.assign(theme, {
    __windowWidth: windowWidth,
    __breakpoints: breakpoints,
  });

  const [themeState, setThemeState] = useState<FicusThemeWithMetadata>(
    deepmerge(themeWithMetadata, customTheme)
  );

  const setTheme = (newTheme: FicusThemeWithMetadata) => {
    const mergedTheme = deepmerge(themeWithMetadata, newTheme);
    setThemeState(mergedTheme);
  };

  const contextValue = useMemo(
    () => ({ theme: themeState, setTheme }),
    [themeWithMetadata]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
