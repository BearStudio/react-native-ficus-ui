import { Stack } from 'expo-router';
import { FicusProvider } from '../../../src/components'

export default function RootLayout() {
  return (
    <FicusProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </FicusProvider>
  );
}
