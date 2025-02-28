
import { Stack } from 'expo-router';
import { ThemeProvider as ThemeProviderV2 } from '@ficus-ui/native'

export default function RootLayout() {
  return (
    <ThemeProviderV2> 
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
    </ThemeProviderV2>
  );
}
