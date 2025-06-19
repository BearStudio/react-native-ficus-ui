import {
  Icon,
  Input,
  SafeAreaBox,
  ScrollBox,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const InputComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Input component
      </Text>
      <ScrollBox>
        <ExampleSection name="With prefix">
          <Input
            placeholder="Username"
            prefix={<Icon name="search" color={useColorModeValue('gray.900', 'white')} />}
          />
        </ExampleSection>
        <ExampleSection name="With suffix">
          <Input
            placeholder="Username"
            suffix={<Icon name="search" color={useColorModeValue('gray.900', 'white')} />}
          />
        </ExampleSection>
        <ExampleSection name="Password">
          <Input placeholder="Password" secureTextEntry />
        </ExampleSection>
        <ExampleSection name="Custom color scheme">
          <Input placeholder="Username" colorScheme="red" />
        </ExampleSection>
        <ExampleSection name="Custom border style">
          <Input
            placeholder="Username"
            borderWidth={2}
            suffix={<Icon name="search" color="gray.900" />}
            _focused={{
              borderWidth: 3,
              borderColor: 'orange.500',
            }}
          />
          <Input
            mt="md"
            placeholder="Username"
            borderWidth={2}
            suffix={<Icon name="search" color="gray.900" />}
            _focused={{
              borderWidth: 3,
              borderColor: 'red.500',
              borderStyle: 'dashed',
            }}
          />
        </ExampleSection>
        <ExampleSection name="Sizes">
          <VStack spacing="md">
            <Input placeholder="Username" size="xs" />
            <Input placeholder="Username" size="sm" />
            <Input placeholder="Username" size="md" />
            <Input placeholder="Username" size="lg" />
          </VStack>
        </ExampleSection>
        <ExampleSection name="Textarea">
          <Textarea mt="md" />
          <Textarea
            mt="md"
            _focused={{
              borderWidth: 3,
              borderColor: 'red.500',
              borderStyle: 'dashed',
            }}
          />
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default InputComponent;
