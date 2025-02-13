import { SafeAreaView } from "react-native";
import {
  Box,
  Stack,
  HStack,
  VStack,
  ScrollBox,
  Text,
} from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const StackComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Stack component
      </Text>
      <ScrollBox>
        <ExampleSection name="Stack row direction">
          <Stack direction="row" spacing={10}>
            <Box w={40} h={40} bg="yellow.200">
              <Text>1</Text>
            </Box>
            <Box w={40} h={40} bg="red.200">
              <Text>2</Text>
            </Box>
            <Box w={40} h={40} bg="pink.200">
              <Text>3</Text>
            </Box>
          </Stack>
        </ExampleSection>

        <ExampleSection name="HStack">
          <HStack spacing={10}>
            <Box w={40} h={40} bg="yellow.200">
              <Text>1</Text>
            </Box>
            <Box w={40} h={40} bg="red.200">
              <Text>2</Text>
            </Box>
            <Box w={40} h={40} bg="pink.200">
              <Text>3</Text>
            </Box>
          </HStack>
        </ExampleSection>

        <ExampleSection name="VStack">
          <VStack spacing={10}>
            <Box w={40} h={40} bg="yellow.200">
              <Text>1</Text>
            </Box>
            <Box w={40} h={40} bg="red.200">
              <Text>2</Text>
            </Box>
            <Box w={40} h={40} bg="pink.200">
              <Text>3</Text>
            </Box>
          </VStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default StackComponent;
