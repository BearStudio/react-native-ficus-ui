import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { PinInput, PinInputField, ScrollBox, Text, VStack } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const PinInputComponent = () => {
  const [pinValue, setPinValue] = useState<string>();
  const [pinValue2, setPinValue2] = useState<string>();
  const [pinValue3, setPinValue3] = useState<string>();
  const [pinValue4, setPinValue4] = useState<string>();
  const [pinValue5, setPinValue5] = useState<string>();
  const [pinValue6, setPinValue6] = useState<string>();
  const [pinValue7, setPinValue7] = useState<string>();
  const [pinValue8, setPinValue8] = useState<string>();
  const [pinValue9, setPinValue9] = useState<string>();

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
          >
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
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
          />
        </ExampleSection>

        <ExampleSection name="Pin input mask and placeholder">
          <PinInput
            value={pinValue4}
            onChangeText={setPinValue4}
            keyboardType="number-pad"
            mask
          />

          <PinInput
            value={pinValue5}
            onChangeText={setPinValue5}
            keyboardType="number-pad"
            colorScheme="green"
            mask
            placeholder="🌿"
            mt="lg"
          />
        </ExampleSection>

        <ExampleSection name="Pin input sizes">
          <VStack spacing="md">
            <PinInput
              value={pinValue6}
              onChangeText={setPinValue6}
              keyboardType="number-pad"
              size="xs"
            />
            <PinInput
              value={pinValue7}
              onChangeText={setPinValue7}
              keyboardType="number-pad"
              size="sm"
            />
            <PinInput
              value={pinValue8}
              onChangeText={setPinValue8}
              keyboardType="number-pad"
              size="md"
            />
            <PinInput
              value={pinValue9}
              onChangeText={setPinValue9}
              keyboardType="number-pad"
              size="lg"
            />
          </VStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default PinInputComponent;
