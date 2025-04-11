import { SafeAreaView } from "react-native";
import { Icon, Input, Text, Textarea } from "@ficus-ui/native";
import ExampleSection from "@/src/ExampleSection";

const InputComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Input component
      </Text>
      <ExampleSection name="With prefix">
        <Input
          placeholder="Username"
          prefix={<Icon name="search" color="gray.900" />}
        />
      </ExampleSection>
      <ExampleSection name="With suffix">
        <Input
          placeholder="Username"
          suffix={<Icon name="search" color="gray.900" />}
        />
      </ExampleSection>
      <ExampleSection name="Password">
        <Input
          placeholder="Password"
          mt="md"
          secureTextEntry
        />
      </ExampleSection>
      <ExampleSection name="Custom border style">
        <Input
          placeholder="Username"
          borderWidth={2}
          suffix={<Icon name="search" color="gray.900" />}
          _focused={{
            borderWidth: 3,
            borderColor: "orange.500"
          }}
        />
        <Input
          mt="md"
          placeholder="Username"
          borderWidth={2}
          suffix={<Icon name="search" color="gray.900" />}
          _focused={{
            borderWidth: 3,
            borderColor: "red.500",
            borderStyle: "dashed"
          }}
        />
      </ExampleSection>
      <ExampleSection name="Textarea">
        <Textarea mt="md" />
        <Textarea
          mt="md"
          _focused={{
            borderWidth: 3,
            borderColor: "red.500",
            borderStyle: "dashed"
          }}
          suffix={<Icon name="search" color="gray.900" />}
        />
      </ExampleSection>
    </SafeAreaView>
  );
};

export default InputComponent;
