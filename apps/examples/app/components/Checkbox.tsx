import { SafeAreaView } from "react-native";
import { Box, Checkbox, CheckboxGroup, HStack, Icon, SafeAreaBox, Text, useColorModeValue, VStack } from  "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const CheckboxComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Checkbox component
      </Text>
      <ExampleSection name="Simple checkbox">
        <VStack spacing="md">
          <Checkbox>Option 1</Checkbox>
          <Checkbox colorScheme="red" defaultChecked>Option 1</Checkbox>
        </VStack>
      </ExampleSection>
      <ExampleSection name="Custom icon">
        <Checkbox colorScheme="purple" defaultChecked icon={<Icon name="flash-outline" />}>Option 1</Checkbox>
      </ExampleSection>
      <ExampleSection name="Sizes">
        <VStack spacing="md">
          <Checkbox size="xs">Option 1</Checkbox>
          <Checkbox size="sm">Option 2</Checkbox>
          <Checkbox size="md">Option 3</Checkbox>
          <Checkbox size="lg">Option 4</Checkbox>
        </VStack>
      </ExampleSection>
      <ExampleSection name="Checkbox disabled">
        <HStack spacing="md">
          <Checkbox isDisabled>
            Option 1
          </Checkbox>
          <Checkbox isDisabled defaultChecked>
            Option 1
          </Checkbox>
        </HStack>
      </ExampleSection>
      <ExampleSection name="Checkbox group">
        <CheckboxGroup colorScheme="green" defaultValue={[2, 3]}>
          <VStack spacing="sm">
            <Checkbox value={1}>Option 1</Checkbox>
            <Checkbox value={2}>Option 2</Checkbox>
            <Checkbox value={3}>Option 3</Checkbox>
            <Checkbox value={4}>Option 4</Checkbox>
          </VStack>
        </CheckboxGroup>
      </ExampleSection>
      <ExampleSection name="Custom render">
        <CheckboxGroup flexDirection="row">
          <HStack spacing="sm">
            {["Option 1", "Option 2", "Option 3"].map((item) => (
              <Checkbox value={item} key={`checkbox-option-${item}`}>
                {({ isChecked }) => (
                  <Box
                    bg={isChecked ? "blue.600" : "blue.100"}
                    px="xl"
                    py="md"
                    mr="md"
                    borderRadius="full"
                  >
                    <Text color={isChecked ? "white" : "gray.800"}>{item}</Text>
                  </Box>
                )}

              </Checkbox>
            ))}
          </HStack>
        </CheckboxGroup>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default CheckboxComponent;
