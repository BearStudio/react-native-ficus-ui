import {
  Box,
  SafeAreaBox,
  Text,
  TouchableWithoutFeedback,
} from '../../../../packages/components/src';

const TouchableWithoutFeedbackComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
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
    </SafeAreaBox>
  );
};

export default TouchableWithoutFeedbackComponent;
