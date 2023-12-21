import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Switch, ScrollBox, Text } from '@/components';
import ExampleSection from '../ExampleSection';

const SwitchComponent = () => {
  const [on, toggle] = useState(false);
  const [on2, toggle2] = useState(false);
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
      </ScrollBox>
    </SafeAreaView>
  );
};

export default SwitchComponent;
