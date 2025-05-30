import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Switch, ScrollBox, Text } from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const SwitchComponent = () => {
  const [on, toggle] = useState(false);
  const [on2, toggle2] = useState(false);
  const [on3, toggle3] = useState(false);
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Switch component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <Switch on={on} onPress={() => toggle(!on)} />
        </ExampleSection>
        <ExampleSection name="change color">
          <Switch colorScheme="red" on={on2} onPress={() => toggle2(!on2)} />
        </ExampleSection>
        <ExampleSection name="change thumb size">
          <Switch thumbSize={8} on={on3} onPress={() => toggle3(!on3)} />
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default SwitchComponent;
