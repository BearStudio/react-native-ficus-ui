import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Radio, RadioGroup, Text } from 'react-native-ficus-ui';
import ExampleSection from '../../components/ExampleSection';

const RadioComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Radio component
      </Text>
      <ExampleSection name="Simple radio">
        <Box>
          <Radio value={1} />
          <Radio value={2} defaultChecked />
          <Radio value={3} colorScheme="green" />
          <Radio value={4} isDisabled />
          <Radio value={5} isLoading />
        </Box>
      </ExampleSection>

      <ExampleSection name="Simple radio group">
        <RadioGroup colorScheme="red">
          <Radio value={1} prefix={<Text flex={1}>Option 1</Text>} />
          <Radio value={2} prefix={<Text flex={1}>Option 2</Text>} />
          <Radio value={3} prefix={<Text flex={1}>Option 3</Text>} />
        </RadioGroup>
      </ExampleSection>

      <ExampleSection name="Radio sizes">
        <RadioGroup>
          <Radio value={1} size="sm">
            Option 1
          </Radio>
          <Radio value={2} size="lg">
            Option 2
          </Radio>
        </RadioGroup>
        <Radio value={3} size="lg" isLoading>
          Loading option
        </Radio>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default RadioComponent;
