import { FC } from 'react';

import { ThemeProvider, ThemeProviderProps } from '@ficus-ui/theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
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
