import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { components } from './items';
import { Box, Text } from 'react-native-ficus-ui';

const HomeScreen = () => {
  // Temporary silencing typescript
  // We would need to add types to navigator
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1}>
          {/* list */}
          <ScrollView>
            <Box mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl">
                Components
              </Text>
              <Box flexDir="row">
                {components.map((item) => (
                  <Link href={`/components/${item.navigationPath}`}>
                    <Text fontSize="xl">{item.onScreenName}</Text>
                  </Link>
                ))}
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
