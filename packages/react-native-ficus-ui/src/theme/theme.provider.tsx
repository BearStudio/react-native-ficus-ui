import * as React from 'react';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import deepmerge from 'deepmerge';
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { ThemeContext } from './theme.context';
import { defaultTheme } from './theme.default';
import type { ThemeType } from './type';

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
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeContext.Provider
        value={{ theme: themeState, setTheme, windowWidth: width }}
      >
        <BottomSheetModalProvider>
          {children}
          <Toast {...themeState.toastProps} />
        </BottomSheetModalProvider>
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
};
