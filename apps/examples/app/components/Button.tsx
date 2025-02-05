import { SafeAreaView, ScrollView } from "react-native";
import { Button, Icon, Text, HStack, VStack } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const ButtonComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Button component
      </Text>
      <ScrollView>
        <ExampleSection name="default">
          <VStack spacing={10}>
            <Button onPress={() => console.log("PRESSED")}>Button</Button>
            <Button colorScheme="red">Button</Button>
            <Button colorScheme="orange">Button</Button>
            <Button colorScheme="green">Button</Button>
            <Button colorScheme="pink">Button</Button>
            <Button colorScheme="pink" full>
              Button
            </Button>
            <Button colorScheme="blue" full isLoading>
              Button
            </Button>
          </VStack>
        </ExampleSection>

        <ExampleSection name="sizes">
          <VStack spacing={10}>
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
            <Button colorScheme="blue" size="2xl">
              Button
            </Button>
          </VStack>
        </ExampleSection>

        <ExampleSection name="round">
          <VStack spacing={10}>
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
          </VStack>
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
          <VStack spacing={10} mt="xl">
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
          </VStack>
        </ExampleSection>

        <ExampleSection name="prefix and suffix">
          <VStack spacing={10}>
            <Button
              colorScheme="green"
              prefix={
                <Icon name="android1" color="white" fontSize="xl" mr="sm" />
              }
            >
              Button
            </Button>
            <Button
              colorScheme="green"
              suffix={
                <Icon name="android1" color="white" fontSize="xl" ml="sm" />
              }
            >
              Button
            </Button>
          </VStack>
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ButtonComponent;
