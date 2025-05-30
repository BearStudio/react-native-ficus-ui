import { FC } from 'react';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider, ThemeProviderProps } from 'react-native-ficus-ui/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
