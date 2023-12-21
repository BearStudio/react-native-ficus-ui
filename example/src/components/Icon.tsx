import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Icon, HStack, Text } from '@/components';
import ExampleSection from '../ExampleSection';

const IconComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Icon component
      </Text>
      <ScrollView>
        <ExampleSection name="default">
          <HStack spacing={10}>
            <Icon name="like1" color="blue.700" fontSize="6xl" />
            <Icon
              name="star"
              color="yellow.700"
              fontSize="6xl"
              fontFamily="FontAwesome"
            />
            <Icon name="codesquare" color="red.500" fontSize="6xl" />
            <Icon name="android1" color="teal.500" fontSize="6xl" />
            <Icon name="heart" color="red.500" fontSize="6xl" />
            <Icon name="apple1" color="blue.700" fontSize="6xl" />
            <Icon name="appstore1" color="teal.500" fontSize="6xl" />
            <Icon name="slack" color="yellow.700" fontSize="6xl" />
          </HStack>
        </ExampleSection>
        <ExampleSection name="Like button">
          <HStack spacing={10}>
            <Icon
              bg="yellow.400"
              p={15}
              borderRadius="full"
              name="star"
              color="yellow.700"
              fontSize="2xl"
              fontFamily="FontAwesome"
            />
          </HStack>
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IconComponent;
