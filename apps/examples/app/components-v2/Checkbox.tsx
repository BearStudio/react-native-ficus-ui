import {  Checkbox, SafeAreaBox, ScrollBox, Stack, Text } from '@ficus-ui/native';

import ExampleSection from '@/src/ExampleSection';

const CheckboxComponent = () => {
  return (
    <SafeAreaBox>
      <Text mx="xl" fontSize="4xl">
        Checkbox component
      </Text>
      <ScrollBox>
        <ExampleSection name="Default">
          <Stack spacing="md">
            <Checkbox value={2} bg='blue'  >Test de checkbox</Checkbox>
          </Stack>
        </ExampleSection>

      </ScrollBox>
    </SafeAreaBox>
  );
};

export default CheckboxComponent;
