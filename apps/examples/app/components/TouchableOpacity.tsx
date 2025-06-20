import { Box, SafeAreaBox, Text, TouchableOpacity, useColorModeValue } from 'react-native-ficus-ui';

const TouchableOpacityComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
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
          <Text color="black">Test</Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaBox>
  );
};

export default TouchableOpacityComponent;
