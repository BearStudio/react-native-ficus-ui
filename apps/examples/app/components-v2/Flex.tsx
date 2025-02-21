import ExampleSection from "@/src/ExampleSection";
import { Box, Flex } from "@ficus-ui/native";
import { SafeAreaView } from "react-native";
import { ScrollBox, Text } from "react-native-ficus-ui";

const FlexComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollBox>
        <Text mx="xl" fontSize="4xl">
          Flex component
        </Text>
        <ExampleSection name="vertical">
          <Flex direction="column">
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </Flex>
        </ExampleSection>
        <ExampleSection name="horizontal">
          <Flex direction="row">
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </Flex>
        </ExampleSection>
        <ExampleSection name="color scheme">
          <Flex direction="row" grow={1} gap={4} shrink={1}>
            <Box h={40} w={40} bg="green.500" />
            <Box h={40} w={40} bg="teal.500" />
            <Box h={40} w={40} bg="yellow.500" />
          </Flex>
        </ExampleSection>
        <ExampleSection name="align items: center">
          <Flex direction="row" align="center" h={100} bg="gray.200">
            <Box h={40} w={40} bg="red.500" />
            <Box h={40} w={40} bg="blue.500" />
            <Box h={40} w={40} bg="purple.500" />
          </Flex>
        </ExampleSection>

        <ExampleSection name="justify content: space-between">
          <Flex direction="row" justify="space-between" h={100} bg="gray.200">
            <Box h={40} w={40} bg="red.500" />
            <Box h={40} w={40} bg="blue.500" />
            <Box h={40} w={40} bg="purple.500" />
          </Flex>
        </ExampleSection>

        <ExampleSection name="wrap: wrap">
          <Flex direction="row" wrap="wrap" w={150} bg="gray.200">
            <Box h={40} w={40} bg="red.500" />
            <Box h={40} w={40} bg="blue.500" />
            <Box h={40} w={40} bg="purple.500" />
            <Box h={40} w={40} bg="orange.500" />
          </Flex>
        </ExampleSection>

        <ExampleSection name="basis: 50%">
          <Flex direction="row">
            <Box h={40} bg="red.500" basis="50%" />
            <Box h={40} bg="blue.500" basis="50%" />
          </Flex>
        </ExampleSection>
   
      </ScrollBox>
    </SafeAreaView>
  );
};

export default FlexComponent;
