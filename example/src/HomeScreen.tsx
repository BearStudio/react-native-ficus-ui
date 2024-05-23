import React from 'react';
import {
  Box,
  ScrollBox,
  Text,
  TouchableOpacity,
  SafeAreaBox,
} from 'react-native-ficus-ui';

import { useNavigation } from '@react-navigation/native';
import { components } from './items';
import { StackNavigationProp } from '@react-navigation/stack';

const HomeScreen = () => {
  // Temporary silencing typescript
  // We would need to add types to navigator
  const navigation = useNavigation<
    StackNavigationProp<Record<string, undefined>>
  >();
  return (
    <>
      <SafeAreaBox flex={1}>
        {/* list */}
        <ScrollBox>
          <Box mt="xl" px="xl">
            <Text pb="lg" fontSize="3xl">
              Components
            </Text>
            <Box flexDir="row">
              {components.map((item) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.navigationPath)}
                  mt={10}
                  w="100%"
                  py={10}
                >
                  <Text fontSize="xl">{item.onScreenName}</Text>
                </TouchableOpacity>
              ))}
            </Box>
          </Box>
        </ScrollBox>
      </SafeAreaBox>
    </>
  );
};

export default HomeScreen;
