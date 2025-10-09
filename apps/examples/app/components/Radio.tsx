import {
  Badge,
  Box,
  Button,
  HStack,
  Radio,
  RadioGroup,
  SafeAreaBox,
  Text,
  VStack,
  useColorModeValue,
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const RadioComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Text mx="xl" fontSize="4xl">
        Radio component
      </Text>
      <ExampleSection name="Simple radio">
        <Box>
          <Radio value={1}>Label</Radio>
          <Radio value={2} defaultChecked>
            Label
          </Radio>
          <Radio value={3} colorScheme="green">
            Label
          </Radio>
          <Radio value={4} isDisabled>
            Label
          </Radio>
          <Radio value={5}>Label</Radio>
        </Box>
      </ExampleSection>

      <ExampleSection name="Simple radio group">
        <RadioGroup colorScheme="red">
          <VStack spacing="sm">
            <Radio value={1}>Option 1</Radio>
            <Radio value={2}>Option 2</Radio>
            <Radio value={3}>Option 3</Radio>
          </VStack>
        </RadioGroup>
      </ExampleSection>

      <ExampleSection name="Radio sizes">
        <RadioGroup>
          <VStack spacing="sm">
            <Radio value={1} size="xs">
              Option 1
            </Radio>
            <Radio value={2} size="sm">
              Option 2
            </Radio>
            <Radio value={3} size="md">
              Option 3
            </Radio>
            <Radio value={4} size="lg">
              Option 4
            </Radio>
          </VStack>
        </RadioGroup>
      </ExampleSection>

      <ExampleSection name="Custom radio">
        <RadioGroup colorScheme="red">
          <HStack spacing="md">
            {['Option 1', 'Option 2', 'Option 3'].map((item) => (
              <Radio value={item} key={`radio-option-${item}`}>
                {({ isChecked }) => (
                  <Badge
                    variant={isChecked ? 'solid' : 'subtle'}
                    colorScheme="pink"
                    fontSize="xl"
                    px="lg"
                    py="lg"
                    borderRadius="full"
                  >
                    {item}
                  </Badge>
                )}
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
      </ExampleSection>
      <ExampleSection name="Custom radio with button">
        <RadioGroup colorScheme="red">
          <HStack spacing="md">
            {['Option 1', 'Option 2', 'Option 3'].map((item) => (
              <Radio value={item} key={`radio-option-${item}`}>
                {({ isChecked, onToggle }) => (
                  <Button
                    bg={isChecked ? 'pink.500' : 'pink.200'}
                    fontSize="xl"
                    borderRadius="full"
                    onPress={onToggle}
                  >
                    {item}
                  </Button>
                )}
              </Radio>
            ))}
          </HStack>
        </RadioGroup>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default RadioComponent;
