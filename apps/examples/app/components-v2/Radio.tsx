import { SafeAreaView } from "react-native";
import { Badge, Box, Radio, RadioGroup, Text } from '@ficus-ui/native'
import ExampleSection from "@/src/ExampleSection";

const RadioComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Radio component
      </Text>
      <ExampleSection name="Simple radio">
        <Box>
          <Radio value={1} isChecked>Label</Radio>
          <Radio value={2} defaultChecked>
            Label
          </Radio>
          <Radio value={3} colorScheme="green">
            Label
          </Radio>
          <Radio value={4} isDisabled>
            Label
          </Radio>
          <Radio value={5} isLoading>
            Label
          </Radio>
        </Box>
      </ExampleSection>

      <ExampleSection name="Simple radio group">
        <RadioGroup colorScheme="red">
          <Radio value={1} prefix={<Text flex={1}>Option 1</Text>}>
            Label
          </Radio>
          <Radio value={2} prefix={<Text flex={1}>Option 2</Text>}>
            Label
          </Radio>
          <Radio value={3} prefix={<Text flex={1}>Option 3</Text>}>
            Label
          </Radio>
        </RadioGroup>
      </ExampleSection>

      <ExampleSection name="Radio sizes">
        <RadioGroup>
          <Radio value={1} size="sm">
            Option 1
          </Radio>
          <Radio value={2} size="lg">
            Option 2
          </Radio>
        </RadioGroup>
        <Radio value={3} size="lg" isLoading>
          Loading option
        </Radio>
      </ExampleSection>

      <ExampleSection name="Custom radio">
        <RadioGroup colorScheme="red" flexDirection="row">
          <Radio value={1}>
            {({ isChecked }) => (
              <Badge
                variant={isChecked ? "solid" : "subtle"}
                colorScheme="pink"
                fontSize="xl"
                px="lg"
                py="lg"
                borderRadius="full"
                mx="sm"
              >
                Option 1
              </Badge>
            )}
          </Radio>
          <Radio value={2}>
            {({ isChecked }) => (
              <Badge
                variant={isChecked ? "solid" : "subtle"}
                colorScheme="pink"
                fontSize="xl"
                px="lg"
                py="lg"
                borderRadius="full"
                mx="sm"
              >
                Option 2
              </Badge>
            )}
          </Radio>
          <Radio value={3}>
            {({ isChecked }) => (
              <Badge
                variant={isChecked ? "solid" : "subtle"}
                colorScheme="pink"
                fontSize="xl"
                px="lg"
                py="lg"
                borderRadius="full"
                mx="sm"
              >
                Option 3
              </Badge>
            )}
          </Radio>
        </RadioGroup>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default RadioComponent;
