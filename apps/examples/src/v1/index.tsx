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

const StackV1 = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaBox flex={1}>
        <ScrollView style={{ flex: 1 }}>
          <Box mt="xl" px="xl">
            <TouchableOpacity
                  onPress={() =>
                    router.back()
                  }
                  mt={10}
                  w="100%"
                  py={10}
                >
                  <Text fontSize="xl">Back</Text>
            </TouchableOpacity>
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

export default StackV1;
