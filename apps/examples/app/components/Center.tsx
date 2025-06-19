import { Box, Center, SafeAreaBox, ScrollBox, Text, useColorModeValue } from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const CenterComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Center component
      </Text>
      <ScrollBox>
        <ExampleSection name="boxes centered">
          <Center>
            <Box h={40} w={40} mr="sm" bg="green.500" />
            <Box h={40} w={40} mr="sm" bg="teal.500" />
            <Box h={40} w={40} mr="sm" bg="yellow.500" />
            <Box h={40} w={40} mr="sm" bg="red.500" />
            <Box h={40} w={40} mr="sm" bg="blue.500" />
            <Box h={40} w={40} mr="sm" bg="gray.500" />
          </Center>
        </ExampleSection>

        <ExampleSection name="Text centered">
          <Center>
            <Text>I'm a text that is centered by Center component</Text>
            <Text>I'm another text that is centered by Center component</Text>
          </Center>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default CenterComponent;
