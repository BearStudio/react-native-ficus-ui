import { SafeAreaView, ScrollView } from "react-native";
import { Text } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const TextComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Text component
      </Text>
      <ScrollView>
        <ExampleSection name="default">
          <Text fontSize="xs">Text size: xs</Text>
          <Text fontSize="sm">Text size: sm</Text>
          <Text fontSize="md">Text size: md</Text>
          <Text fontSize="lg">Text size: lg</Text>
          <Text fontSize="xl">Text size: xl</Text>
          <Text fontSize="2xl">Text size: 2xl</Text>
          <Text fontSize="3xl">Text size: 3xl</Text>
          <Text fontSize="4xl">Text size: 4xl</Text>
        </ExampleSection>

        <ExampleSection name="bold">
          <Text fontWeight="bold">Text size: lg</Text>
        </ExampleSection>

        <ExampleSection name="uppercase + colored">
          <Text color="blue.500" textTransform="uppercase">
            Text size: lg
          </Text>
        </ExampleSection>

        <ExampleSection name="font family">
          <Text
            fontSize="4xl"
            textTransform="uppercase"
            fontFamily="Inconsolata-Regular"
          >
            Text size: 4xl
          </Text>

          <Text
            mt="xl"
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="Inconsolata-Regular"
          >
            when fontweight is other than 'normal', fontfamily will be ignored
            (Android limitation). so we decided to this: when fontfamily is
            defined, fontweight will be set to 'normal' (on all platforms). set
            a default font for each fontweight on theme.
          </Text>
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextComponent;
