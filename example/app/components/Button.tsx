import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, VStack } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const ButtonComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Button component
      </Text>
      <ScrollView>
        <ExampleSection name="default">
          <VStack spacing={10}>
            <Button onPress={() => console.log('PRESSED')}>Button</Button>
            <Button colorScheme="red">Button</Button>
            <Button colorScheme="orange">Button</Button>
            <Button colorScheme="green">Button</Button>
            <Button colorScheme="pink">Button</Button>
            <Button colorScheme="pink" full>
              Button
            </Button>
            <Button colorScheme="blue" full isLoading>
              Button
            </Button>
          </VStack>
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonComponent;
