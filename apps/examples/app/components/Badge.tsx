import { Badge, SafeAreaBox, ScrollBox, Stack, Text, useColorModeValue } from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const BadgeComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Badge component
      </Text>
      <ScrollBox>
        <ExampleSection name="color scheme">
          <Stack spacing="md">
            <Badge>New</Badge>
            <Badge colorScheme="green">New</Badge>
            <Badge colorScheme="red">New</Badge>
            <Badge colorScheme="orange">New</Badge>
            <Badge colorScheme="purple">New</Badge>
            <Badge colorScheme="pink">New</Badge>
          </Stack>
        </ExampleSection>
        <ExampleSection name="sizes">
          <Stack spacing="md">
            <Badge size="xs">New</Badge>
            <Badge colorScheme="green" size="sm">
              New
            </Badge>
            <Badge colorScheme="red" size="md">
              New
            </Badge>
            <Badge colorScheme="orange" size="lg">
              New
            </Badge>
            <Badge colorScheme="purple" size="xl">
              New
            </Badge>
            <Badge colorScheme="pink" size="2xl">
              New
            </Badge>
          </Stack>
        </ExampleSection>

        <ExampleSection name="variants">
          <Stack spacing="md">
            <Badge variant="outline">Outline</Badge>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="subtle">Subtle</Badge>
          </Stack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default BadgeComponent;
