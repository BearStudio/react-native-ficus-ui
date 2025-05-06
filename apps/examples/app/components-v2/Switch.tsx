import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Switch, ScrollBox, Text, HStack } from  "@ficus-ui/native";
import ExampleSection from "@/src/ExampleSection";

const SwitchComponent = () => {
  const [isChecked, toggle] = useState(false);
  const [isChecked2, toggle2] = useState(false);
  const [isChecked3, toggle3] = useState(false);
  const [isChecked4, toggle4] = useState(false);
  const [isChecked5, toggle5] = useState(false);
  
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Switch component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <Switch isChecked={isChecked} onPress={() => toggle(!isChecked)} />
        </ExampleSection>
        <ExampleSection name="change color">
          <Switch colorScheme="red" isChecked={isChecked2} onPress={() => toggle2(!isChecked2)} />
        </ExampleSection>
        <ExampleSection name="sizes">
          <HStack spacing="md">
            <Switch size="xs" isChecked={isChecked3} onPress={() => toggle3(!isChecked3)} />
            <Switch size="sm" colorScheme="blue" isChecked={isChecked3} onPress={() => toggle3(!isChecked3)} />
            <Switch size="md" colorScheme="orange" isChecked={isChecked3} onPress={() => toggle3(!isChecked3)} />
            <Switch size="lg" colorScheme="purple" isChecked={isChecked3} onPress={() => toggle3(!isChecked3)} />
          </HStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default SwitchComponent;
