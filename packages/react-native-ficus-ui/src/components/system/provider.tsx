import { FC } from 'react';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ThemeProvider, ThemeProviderProps } from '../../theme';

export interface FicusProviderProps extends ThemeProviderProps {}

export const FicusProvider: FC<FicusProviderProps> = (props) => {
  const { theme, children } = props;

  const gestureHandlerRootViewStyle = { flex: 1 };
  return (
    <GestureHandlerRootView style={gestureHandlerRootViewStyle}>
      <ThemeProvider theme={theme}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};
