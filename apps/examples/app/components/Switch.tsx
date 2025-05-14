import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Switch, ScrollBox, Text, HStack } from  "../../../../packages/components/src";
import ExampleSection from "@/src/ExampleSection";

const SwitchComponent = () => {
  const [isChecked, toggle] = useState(false);
  const [isChecked2, toggle2] = useState(false);
  const [isChecked3, toggle3] = useState(false);
  const [isChecked4, toggle4] = useState(false);
  const [isChecked5, toggle5] = useState(false);
  const [isChecked6, toggle6] = useState(false);
  const [isChecked7, toggle7] = useState(false);
  const [isChecked8, toggle8] = useState(false);

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
            <Switch size="sm" colorScheme="blue" isChecked={isChecked4} onPress={() => toggle4(!isChecked4)} />
            <Switch size="md" colorScheme="orange" isChecked={isChecked5} onPress={() => toggle5(!isChecked5)} />
            <Switch size="lg" colorScheme="purple" isChecked={isChecked6} onPress={() => toggle6(!isChecked6)} />
          </HStack>
        </ExampleSection>
        <ExampleSection name="change animation duration">
          <Switch colorScheme="red" duration={100} isChecked={isChecked7} onPress={() => toggle7(!isChecked7)} />
        </ExampleSection>
        <ExampleSection name="disabled">
          <HStack spacing="md">
            <Switch isDisabled isChecked={false} />
            <Switch isDisabled isChecked />
          </HStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default SwitchComponent;
