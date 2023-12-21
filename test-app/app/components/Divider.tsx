import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Box, Text } from 'react-native-ficus-ui';
import ExampleSection from '../../components/ExampleSection';

const DividerComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Divider component
      </Text>
      <Box>
        <ExampleSection name="horizontal">
          <Text>Test text</Text>
          <Divider my="md" />
          <Text>Test text</Text>
        </ExampleSection>

        <ExampleSection name="vertical">
          <Box h={40} flexDirection="row">
            <Divider orientation="vertical" />
            <Box m="md">
              <Text>Test text</Text>
            </Box>
          </Box>
        </ExampleSection>

        <ExampleSection name="custom color">
          <Text>Test text</Text>
          <Divider colorScheme="blue" my="md" />
          <Text>Test text</Text>
        </ExampleSection>

        <ExampleSection name="custom size">
          <Text>Test text</Text>
          <Divider size={10} my="md" />
          <Text>Test text</Text>

          <Box mt="xl" h={40} flexDirection="row">
            <Divider size={10} orientation="vertical" />
            <Box m="md">
              <Text>Test text</Text>
            </Box>
          </Box>
        </ExampleSection>
      </Box>
    </SafeAreaView>
  );
};

export default DividerComponent;
