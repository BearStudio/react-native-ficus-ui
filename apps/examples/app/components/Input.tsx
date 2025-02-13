import { SafeAreaView } from "react-native";
import { Icon, Input, Textarea, Text } from "react-native-ficus-ui";
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
          focusBorderColor="blue.500"
          prefix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
        />
      </ExampleSection>
      <ExampleSection name="With suffix">
        <Input
          placeholder="Username"
          focusBorderColor="blue.500"
          suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
        />
      </ExampleSection>
      <ExampleSection name="Password">
        <Input
          placeholder="Password"
          mt="md"
          secureTextEntry
          focusBorderColor="blue.500"
        />
      </ExampleSection>
      <ExampleSection name="Custom border style">
        <Input
          placeholder="Username"
          borderWidth={2}
          focusBorderColor="orange.500"
          focusBorderWidth={3}
          suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
        />
        <Input
          mt="md"
          placeholder="Username"
          borderWidth={2}
          focusBorderColor="red.500"
          focusBorderWidth={3}
          focusBorderStyle="dashed"
          suffix={<Icon name="search" color="gray.900" fontFamily="Feather" />}
        />
      </ExampleSection>
      <ExampleSection name="Textarea">
        <Textarea mt="md" focusBorderColor="blue.500" />
        <Textarea
          mt="md"
          focusBorderColor="red.500"
          focusBorderWidth={3}
          focusBorderStyle="dashed"
        />
      </ExampleSection>
    </SafeAreaView>
  );
};

export default InputComponent;
