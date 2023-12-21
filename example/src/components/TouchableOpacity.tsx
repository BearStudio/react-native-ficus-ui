import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, TouchableOpacity, Text } from '@/components';

const TouchableOpacityComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        TouchableOpacity component
      </Text>
      <Box mx="xl" mt="lg">
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Text>Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          bg="red.300"
          p="xl"
          borderRadius="xl"
          onPress={() => console.log('Pressed')}
        >
          <Text>Test</Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

export default TouchableOpacityComponent;
