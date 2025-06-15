import React from 'react';
import {
  Box,
  Text,
  TouchableOpacity,
  SafeAreaBox,
} from 'react-native-ficus-ui';

import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { components } from '@/app/items';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaBox flex={1}>
        {/* list */}
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <Text pb="lg" fontSize="3xl">
            Components
          </Text>
          <Box>
            {components.map((item, index) => (
              <TouchableOpacity
                key={`item-${index}`}
                onPress={() =>
                  router.push(`/components/${item.navigationPath}` as any)
                }
                mt={10}
                w="100%"
                py={10}
              >
                <Text fontSize="xl">{item.onScreenName}</Text>
              </TouchableOpacity>
            ))}
          </Box>
          <Box h={50} />
        </ScrollView>
      </SafeAreaBox>
    </>
  );
};

export default HomeScreen;
