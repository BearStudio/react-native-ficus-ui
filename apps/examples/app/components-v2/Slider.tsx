import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Slider, Text } from '@ficus-ui/native';
import ExampleSection from "@/src/ExampleSection";

const SliderComponent = () => {
  const [value, setValue] = useState(0.2);

  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Slider
      </Text>
      <ExampleSection name="Slider">
        <Slider />
        <Slider colorScheme="green" defaultValue={0.2} />
        <Slider colorScheme="red" defaultValue={0.3} />
        <Slider colorScheme="orange" defaultValue={0.5} />
        <Slider colorScheme="pink" filledTrackColor="pink.100" />
      </ExampleSection>

      <ExampleSection name="Slider value">
        <Text>Slider value : {Math.round(value * 100) / 100}</Text>
        <Slider colorScheme="teal" value={value} onValueChange={setValue} />
      </ExampleSection>

      <ExampleSection name="Slider custom step">
        <Slider colorScheme="orange" step={0.2} />
      </ExampleSection>
    </SafeAreaView>
  );
};

export default SliderComponent;
