import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, TouchableWithoutFeedback, Text } from 'react-native-ficus-ui';

const TouchableWithoutFeedbackComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        TouchableWithoutFeedback component
      </Text>
      <Box mx="xl" mt="lg">
        <TouchableWithoutFeedback onPress={() => console.log('Pressed')}>
          <Text>Test</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          bg="red.300"
          p="xl"
          borderRadius="xl"
          onPress={() => console.log('Pressed')}
        >
          <Text>Test</Text>
        </TouchableWithoutFeedback>
      </Box>
    </SafeAreaView>
  );
};

export default TouchableWithoutFeedbackComponent;
