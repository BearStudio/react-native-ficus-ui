import { Box, SafeAreaBox, Text, TouchableHighlight, useColorModeValue } from 'react-native-ficus-ui';

const TouchableHighlightComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        TouchableHighlight component
      </Text>
      <Box mx="xl" mt="lg">
        <TouchableHighlight onPress={() => console.log('Pressed')}>
          <Text>Test</Text>
        </TouchableHighlight>
        <TouchableHighlight
          bg="red.300"
          p="xl"
          borderRadius="xl"
          underlayColor="white"
          activeOpacity={0.5}
          onPress={() => console.log('Pressed')}
        >
          <Text color="black">Test</Text>
        </TouchableHighlight>
      </Box>
    </SafeAreaBox>
  );
};

export default TouchableHighlightComponent;
