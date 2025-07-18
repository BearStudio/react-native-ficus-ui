import { Button, HStack, SafeAreaBox, ScrollBox, Stack, Text, Icon, useColorModeValue } from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';


const ButtonComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Button component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <Stack spacing={10}>
            <Button onPress={() => console.log('PRESSED')}>Button</Button>
            <Button colorScheme="red">Button</Button>
            <Button colorScheme="yellow">Button</Button>
            <Button colorScheme="green">Button</Button>
            <Button colorScheme="pink" isDisabled>Button Disabled</Button>
            <Button colorScheme="pink" full>
              Button
            </Button>
            <Button colorScheme="blue" isLoading>
              Button
            </Button>
            <Button colorScheme="blue" loadingText='Loading...' isLoading>
              Button
            </Button>
          </Stack>
        </ExampleSection>

        <ExampleSection name="sizes">
          <Stack spacing={10}>
            <Button size="xs">Button</Button>
            <Button colorScheme="red" size="sm">
              Button
            </Button>
            <Button colorScheme="orange" size="md">
              Button
            </Button>
            <Button colorScheme="green" size="lg">
              Button
            </Button>
            <Button colorScheme="pink" size="xl">
              Button
            </Button>
            <Button colorScheme="purple" size="2xl">
              Button
            </Button>
          </Stack>
        </ExampleSection>

        <ExampleSection name="round">
          <Stack spacing={10}>
            <Button size="xs" isRound>
              Button
            </Button>
            <Button colorScheme="red" size="sm" isRound>
              Button
            </Button>
            <Button colorScheme="orange" size="md" isRound>
              Button
            </Button>
            <Button colorScheme="green" size="lg" isRound>
              Button
            </Button>
            <Button colorScheme="pink" size="xl" isRound>
              Button
            </Button>
          </Stack>
        </ExampleSection>

        <ExampleSection name="variants">
          <HStack spacing={10}>
            <Button colorScheme="teal">Button</Button>
            <Button colorScheme="teal" variant="outline">
              Button
            </Button>
            <Button colorScheme="teal" variant="ghost">
              Button
            </Button>
            <Button colorScheme="teal" variant="link">
              Button
            </Button>
          </HStack>
          <Stack spacing={10} mt="xl">
            <Button colorScheme="teal" full>
              Button
            </Button>
            <Button colorScheme="teal" variant="outline" full>
              Button
            </Button>
            <Button colorScheme="teal" variant="ghost" full>
              Button
            </Button>
            <Button colorScheme="teal" variant="outline" full isLoading>
              Button
            </Button>
          </Stack>
        </ExampleSection>

        <ExampleSection name="prefix and suffix">
          <Stack spacing={10}>
            <Button colorScheme="green">
              <Icon name="heart" size="xl" mr="sm" />
              Button
            </Button>
            <Button colorScheme="green">
              Button
              <Icon name="heart" size="xl" ml="sm" />
            </Button>
          </Stack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default ButtonComponent;
