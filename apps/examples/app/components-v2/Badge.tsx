import { Badge, SafeAreaBox, ScrollBox, Stack, Text } from '@ficus-ui/native';

import ExampleSection from '@/src/ExampleSection';

const BadgeComponent = () => {
  return (
    <SafeAreaBox>
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
        <ExampleSection name="font size">
          <Stack spacing="md">
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
