import { Text, Select, VStack, SafeAreaBox, useColorModeValue } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const SelectComponent = () => {
  const items = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ];

  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Select component
      </Text>
      <ExampleSection name="Sizes">
        <VStack spacing="md">
          <Select
            size="md"
            onValueChange={(value) => console.log(value)}
            items={items}
          />
          <Select
            size="md"
            onValueChange={(value) => console.log(value)}
            items={items}
            colorScheme="red"
          />
        </VStack>
      </ExampleSection>
      <ExampleSection name="Sizes">
        <VStack spacing="md">
          <Select
            size="xs"
            onValueChange={(value) => console.log(value)}
            items={items}
          />
          <Select
            size="sm"
            onValueChange={(value) => console.log(value)}
            items={items}
          />
          <Select
            size="md"
            onValueChange={(value) => console.log(value)}
            items={items}
          />
          <Select
            size="lg"
            onValueChange={(value) => console.log(value)}
            items={items}
          />
        </VStack>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default SelectComponent;
