import React from 'react';
import { SafeAreaView } from 'react-native';
import { Badge, ScrollBox, Text, VStack } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const BadgeComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Badge component
      </Text>
      <ScrollBox>
        <ExampleSection name="color scheme">
          <VStack spacing="md">
            <Badge>New</Badge>
            <Badge colorScheme="green">New</Badge>
            <Badge colorScheme="red">New</Badge>
            <Badge colorScheme="orange">New</Badge>
            <Badge colorScheme="purple">New</Badge>
            <Badge colorScheme="pink">New</Badge>
          </VStack>
        </ExampleSection>
        <ExampleSection name="font size">
          <VStack spacing="md">
            <Badge fontSize="xs">New</Badge>
            <Badge colorScheme="green" fontSize="sm">
              New
            </Badge>
            <Badge colorScheme="red" fontSize="md">
              New
            </Badge>
            <Badge colorScheme="orange" fontSize="lg">
              New
            </Badge>
            <Badge colorScheme="purple" fontSize="xl">
              New
            </Badge>
            <Badge colorScheme="pink" fontSize="2xl">
              New
            </Badge>
          </VStack>
        </ExampleSection>

        <ExampleSection name="variants">
          <VStack spacing="md">
            <Badge variant="outline" colorScheme="green" fontSize="2xl">
              Outline
            </Badge>
            <Badge variant="solid" colorScheme="green" fontSize="2xl">
              Solid
            </Badge>
            <Badge variant="subtle" colorScheme="green" fontSize="2xl">
              Subtle
            </Badge>
          </VStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default BadgeComponent;
