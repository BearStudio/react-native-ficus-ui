import React from 'react';
import {
  Box,
  Text,
  TouchableOpacity,
  SafeAreaBox,
  IconButton,
  Icon,
  useColorMode,
  useColorModeValue,
} from 'react-native-ficus-ui';

import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { components } from '@/app/items';

const HomeScreen = () => {
  const router = useRouter();

  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
        {/* list */}
        <ScrollView style={{ flex: 1, padding: 20 }}>
          <Box pb="lg" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontSize="3xl">
              Components
            </Text>
            <IconButton variant="outline" icon={<Icon name={colorMode === 'light' ? 'moon' : 'sunny'} />} isRound onPress={toggleColorMode} />
          </Box>
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
