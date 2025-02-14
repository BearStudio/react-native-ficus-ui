
import { Stack } from 'expo-router';
import { Box, ThemeProvider as ThemeProviderV2 } from '@ficus-ui/native'
import { ThemeProvider } from 'react-native-ficus-ui';

export default function RootLayout() {
  return (
    <ThemeProviderV2>
      <Box borderWidth={1} borderColor="green.500"></Box>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </ThemeProvider>
    </ThemeProviderV2>
  );
}
