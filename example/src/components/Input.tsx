import React from 'react';
import { SafeAreaView } from 'react-native';
import { Icon, Input, Textarea, Text } from '@/components';
import ExampleSection from '../ExampleSection';

const InputComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Input component
      </Text>
      <ExampleSection name="With suffix">
        <Input
          placeholder="Username"
          p={10}
          focusBorderColor="blue.500"
          suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
        />
      </ExampleSection>
      <ExampleSection name="Password">
        <Input
          placeholder="Password"
          mt="md"
          p={10}
          secureTextEntry
          focusBorderColor="blue.500"
        />
      </ExampleSection>
      <ExampleSection name="Textarea">
        <Textarea mt="md" p={10} focusBorderColor="blue.500" />
      </ExampleSection>
    </SafeAreaView>
  );
};

export default InputComponent;
