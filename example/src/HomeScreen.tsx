import React from 'react';
import {
  Box,
  Text,
  TouchableOpacity,
  SafeAreaBox,
} from 'react-native-ficus-ui';

import { components } from '@/app/items';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaBox flex={1}>
        {/* list */}
        <ScrollView style={{ flex: 1 }}>
          <Box mt="xl" px="xl">
            <Text pb="lg" fontSize="3xl">
              Components
            </Text>
            <Box flexDir="row">
              {components.map((item, index) => (
                <TouchableOpacity
                  key={`item-${index}`}
                  onPress={() =>
                    router.push(`/components/${item.navigationPath}`)
                  }
                  mt={10}
                  w="100%"
                  py={10}
                >
                  <Text fontSize="xl">{item.onScreenName}</Text>
                </TouchableOpacity>
              ))}
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaBox>
    </>
  );
};

export default HomeScreen;
