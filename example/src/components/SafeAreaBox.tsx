import React from 'react';
import { Box, SafeAreaBox, Text } from 'react-native-ficus-ui';

const SafeAreaBoxComponent = () => {
  return (
    <SafeAreaBox bg="blue.100" h="100%">
      <Box px="xl">
        <Text fontSize="4xl">SafeAreaBox component</Text>
        <Box flexDirection="row">
          <Box h={40} w={40} mr="sm" bg="green.500" />
          <Box h={40} w={40} mr="sm" bg="teal.500" />
          <Box h={40} w={40} mr="sm" bg="yellow.500" />
        </Box>
      </Box>
    </SafeAreaBox>
  );
};

export default SafeAreaBoxComponent;
