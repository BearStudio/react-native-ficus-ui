import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Checkbox, CheckboxGroup, Text } from '@/components';
import ExampleSection from '../ExampleSection';

const CheckboxComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Checkbox component
      </Text>
      <ExampleSection name="Simple checkbox">
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
        <Checkbox value={5} prefix={<Text flex={1}>Option 5</Text>} isLoading />
      </ExampleSection>

      <ExampleSection name="Checkbox sizes">
        <Checkbox value={1}>Option 1</Checkbox>
        <Checkbox value={2} size="lg">
          Option 2
        </Checkbox>
        <Checkbox value={3} size="lg" isLoading>
          Option 3
        </Checkbox>
      </ExampleSection>

      <ExampleSection name="Checkbox disabled">
        <Checkbox value={1} isDisabled>
          Option 1
        </Checkbox>
      </ExampleSection>

      <ExampleSection name="Checkbox group">
        <CheckboxGroup colorScheme="green">
          <Checkbox value={1}>Option 1</Checkbox>
          <Checkbox value={2}>Option 2</Checkbox>
        </CheckboxGroup>
      </ExampleSection>

      <ExampleSection name="Custom render">
        <CheckboxGroup flexDirection="row">
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
        </CheckboxGroup>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default CheckboxComponent;
