import { Box, SafeAreaBox, Text, TouchableOpacity } from '../../../../packages/components/src';

const TouchableOpacityComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
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
    </SafeAreaBox>
  );
};

export default TouchableOpacityComponent;
