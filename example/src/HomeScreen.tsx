import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { components } from './items';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, Box } from '@/components';

const HomeScreen = () => {
  // Temporary silencing typescript
  // We would need to add types to navigator
  const navigation = useNavigation<
    StackNavigationProp<Record<string, undefined>>
  >();
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.navigationPath)}
                    style={{
                      marginTop: 10,
                      width: '100%',
                      paddingVertical: 10,
                    }}
                  >
                    <Text fontSize="xl">{item.onScreenName}</Text>
                  </TouchableOpacity>
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
