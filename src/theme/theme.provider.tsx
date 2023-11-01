import * as React from 'react';

import { ThemeContext } from './theme.context';
import deepmerge from 'deepmerge';
import type { ThemeType } from './type';
import { defaultTheme } from './theme.default';
import Toast from 'react-native-toast-message';
import { useWindowDimensions } from 'react-native';

export interface ThemeProviderProps {
  theme?: ThemeType;
  children: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props
) => {
  const { theme: themeProp = {}, children } = props;
  const { width } = useWindowDimensions();

  const [themeState, setThemeState] = React.useState(
    deepmerge(defaultTheme, themeProp)
  );

  const setTheme = (newTheme: ThemeType) => {
    const mergedTheme = deepmerge(defaultTheme, newTheme);
    setThemeState(mergedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themeState, setTheme, windowWidth: width }}
    >
      {children}
      <Toast {...themeState.toastProps} />
    </ThemeContext.Provider>
  );
};
