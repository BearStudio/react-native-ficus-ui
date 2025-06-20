import {
  Box,
  SafeAreaBox,
  Text,
  TouchableWithoutFeedback,
  useColorModeValue,
} from 'react-native-ficus-ui';

const TouchableWithoutFeedbackComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
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
          <Text color="black">Test</Text>
        </TouchableWithoutFeedback>
      </Box>
    </SafeAreaBox>
  );
};

export default TouchableWithoutFeedbackComponent;
