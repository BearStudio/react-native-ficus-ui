import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { PinInput, ScrollBox, Text } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const PinInputComponent = () => {
  const [pinValue, setPinValue] = useState<string>();
  const [pinValue2, setPinValue2] = useState<string>();
  const [pinValue3, setPinValue3] = useState<string>();
  const [pinValue4, setPinValue4] = useState<string>();
  const [pinValue5, setPinValue5] = useState<string>();

  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        PinInput component
      </Text>
      <ScrollBox>
        <ExampleSection name="Pin input">
          <PinInput
            value={pinValue}
            renderCell={() => <></>}
            onChangeText={setPinValue}
            keyboardType="number-pad"
            w={250}
          />
        </ExampleSection>

        <ExampleSection name="Pin input change count">
          <PinInput
            value={pinValue2}
            renderCell={() => <></>}
            onChangeText={setPinValue2}
            keyboardType="number-pad"
            cellCount={6}
          />
        </ExampleSection>

        <ExampleSection name="Pin input color scheme">
          <PinInput
            renderCell={() => <></>}
            value={pinValue3}
            onChangeText={setPinValue3}
            keyboardType="number-pad"
            colorScheme="orange"
            w={250}
          />
        </ExampleSection>

        <ExampleSection name="Pin input mask and placeholder">
          <PinInput
            renderCell={() => <></>}
            value={pinValue4}
            onChangeText={setPinValue4}
            keyboardType="number-pad"
            w={250}
            mask
          />

          <PinInput
            renderCell={() => <></>}
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
