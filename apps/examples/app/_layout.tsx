
import { Stack } from 'expo-router';
import {  FicusProvider } from '@ficus-ui/native'

export default function RootLayout() {
  return (
    <FicusProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
    </FicusProvider>
  );
}
