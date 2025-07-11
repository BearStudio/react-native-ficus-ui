import { Stack } from 'expo-router';
import { FicusProvider } from 'react-native-ficus-ui';

export default function RootLayout() {
  return (
    <FicusProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </FicusProvider>
  );
}
