import {
  Box,
  HStack,
  ScrollBox,
  Stack,
  StackDivider,
  Text,
  VStack,
  SafeAreaBox,
  useColorModeValue
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const StackComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <ScrollBox>
        <Text mx="xl" fontSize="4xl">
          Stack component
        </Text>
        <ExampleSection name="HStack">
          <HStack>
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </HStack>
        </ExampleSection>
        <ExampleSection name="VStack">
          <VStack>
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </VStack>
        </ExampleSection>
        <ExampleSection name="Stack with Dividers">
          <Stack divider={<StackDivider />} spacing={10}>
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </Stack>
        </ExampleSection>
        <ExampleSection name="Nested Stack">
          <Stack>
            <HStack>
              <Box h={40} w={40} bg="purple.500" />
              <Box h={40} w={40} bg="pink.500" />
            </HStack>
            <VStack>
              <Box h={40} w={40} bg="cyan.500" />
              <Box h={40} w={40} bg="orange.500" />
            </VStack>
          </Stack>
        </ExampleSection>
        <ExampleSection name="Custom Spacing Stack">
          <Stack spacing="xl">
            <Box h={40} w={40} bg="blue.500" />
            <Box h={40} w={40} bg="red.500" />
            <Box h={40} w={40} bg="green.500" />
          </Stack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default StackComponent;
