import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Switch, ScrollBox, Text } from 'react-native-ficus-ui';
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
          <Switch
            on={on2}
            onPress={() => toggle2(!on2)}
            bg="gray.200"
            circleBg="blue.500"
            activeBg="blue.700"
          />
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default SwitchComponent;
