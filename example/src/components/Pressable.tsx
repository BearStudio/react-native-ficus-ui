import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Pressable, Text } from '@/components';

const PressableComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Pressable component
      </Text>
      <Box mx="xl" mt="lg">
        <Pressable
          bg="red.300"
          p="xl"
          borderRadius="xl"
          onPress={() => console.log('Pressed')}
        >
          <Text>Test</Text>
        </Pressable>
      </Box>
    </SafeAreaView>
  );
};

export default PressableComponent;
