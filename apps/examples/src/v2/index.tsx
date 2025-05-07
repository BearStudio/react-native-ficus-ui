import React from 'react';
import {
  Box,
  Text,
  TouchableOpacity,
  SafeAreaBox,
} from '@ficus-ui/native';

import { components } from '@/app/items-v2';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

const StackV2 = () => {
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
            <Box>
              {components.map((item, index) => (
                <TouchableOpacity
                  key={`item-${index}`}
                  onPress={() =>
                    router.push(`/components-v2/${item.navigationPath}`)
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

export default StackV2;
