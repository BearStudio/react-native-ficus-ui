import { useState } from "react";

import { Slider, Text, SafeAreaBox, useColorModeValue } from 'react-native-ficus-ui';
import ExampleSection from "@/src/ExampleSection";

const SliderComponent = () => {
  const [value, setValue] = useState(0.2);

  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
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
        <Slider colorScheme="orange" step={0.2} h={40}/>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default SliderComponent;
