import { SafeAreaView } from "react-native";
import { Text, Select, VStack } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const SelectComponent = () => {
  const items = [
    { label: 'Football', value: 'football' },
    { label: 'Baseball', value: 'baseball' },
    { label: 'Hockey', value: 'hockey' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};

export default SelectComponent;
