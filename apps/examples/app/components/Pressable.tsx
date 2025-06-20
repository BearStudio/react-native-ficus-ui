import {SafeAreaBox, Box, Pressable, Text, useColorModeValue} from 'react-native-ficus-ui'

const PressableComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Pressable component
      </Text>
      <Box mx="xl" mt="lg">
        <Pressable
          bg="red.300"
          p="xl"
          borderRadius="xl"
          onPress={() => console.log('Pressed')}
          _pressed={{
            opacity: 0.8
          }}
        >
          <Text color="black">Test</Text>
        </Pressable>
      </Box>
    </SafeAreaBox>
  );
};

export default PressableComponent;
