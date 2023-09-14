import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Checkbox, Text } from 'react-native-ficus-ui';
import ExampleSection from '../ExampleSection';

const CheckboxComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Checkbox component
      </Text>
      <ExampleSection name="Simple checkbox">
        <Box>
          <Checkbox value={1} prefix={<Text flex={1}>Option 1</Text>} />
          <Checkbox value={2} prefix={<Text flex={1}>Option 2</Text>} />
          <Checkbox
            value={3}
            prefix={<Text flex={1}>Option 3</Text>}
            colorScheme="red"
          />
          <Checkbox
            value={4}
            prefix={<Text flex={1}>Option 4</Text>}
            colorScheme="pink"
          />
          <Checkbox
            value={5}
            prefix={<Text flex={1}>Option 5</Text>}
            isLoading
          />
        </Box>
      </ExampleSection>

      <ExampleSection name="Custom render">
        <Checkbox.Group flexDirection="row">
          {['Option 1', 'Option 2', 'Option 3'].map((item) => (
            <Checkbox value={item}>
              {({ isChecked }) => (
                <Box
                  bg={isChecked ? 'blue.600' : 'blue.100'}
                  px="xl"
                  py="md"
                  mr="md"
                  borderRadius="full"
                >
                  <Text color={isChecked ? 'white' : 'gray.800'}>{item}</Text>
                </Box>
              )}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default CheckboxComponent;
