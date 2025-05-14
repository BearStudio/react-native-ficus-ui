import {SafeAreaBox, Box, Pressable, Text} from '@ficus-ui/native'

const PressableComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
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
          <Text>Test</Text>
        </Pressable>
      </Box>
    </SafeAreaBox>
  );
};

export default PressableComponent;
