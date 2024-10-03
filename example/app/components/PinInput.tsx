import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { PinInput, ScrollBox, Text } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const PinInputComponent = () => {
  const [pinValue, setPinValue] = useState(null);
  const [pinValue2, setPinValue2] = useState(null);
  const [pinValue3, setPinValue3] = useState(null);
  const [pinValue4, setPinValue4] = useState(null);
  const [pinValue5, setPinValue5] = useState(null);

  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        PinInput component
      </Text>
      <ScrollBox>
        <ExampleSection name="Pin input">
          <PinInput
            value={pinValue}
            onChangeText={setPinValue}
            keyboardType="number-pad"
            w={250}
          />
        </ExampleSection>

        <ExampleSection name="Pin input change count">
          <PinInput
            value={pinValue2}
            onChangeText={setPinValue2}
            keyboardType="number-pad"
            cellCount={6}
          />
        </ExampleSection>

        <ExampleSection name="Pin input color scheme">
          <PinInput
            value={pinValue3}
            onChangeText={setPinValue3}
            keyboardType="number-pad"
            colorScheme="orange"
            w={250}
          />
        </ExampleSection>

        <ExampleSection name="Pin input mask and placeholder">
          <PinInput
            value={pinValue4}
            onChangeText={setPinValue4}
            keyboardType="number-pad"
            w={250}
            mask
          />

          <PinInput
            value={pinValue5}
            onChangeText={setPinValue5}
            keyboardType="number-pad"
            colorScheme="green"
            w={250}
            mask
            placeholder="🌿"
            mt="lg"
          />
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default PinInputComponent;
