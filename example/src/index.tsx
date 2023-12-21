import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { components } from './items';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inconsolata-Regular': require('../assets/fonts/Inconsolata-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />

          {components.map((component) => {
            return (
              <Stack.Screen
                key={`page-${component.onScreenName}`}
                name={component.navigationPath}
                component={component.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
