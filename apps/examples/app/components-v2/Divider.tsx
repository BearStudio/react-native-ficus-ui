import { Divider, Box, Text, SafeAreaBox } from '@ficus-ui/native';
import ExampleSection from '@/src/ExampleSection';

const DividerComponent = () => {
  return (
    <SafeAreaBox>
      <Text mx="xl" fontSize="4xl">
        Divider component
      </Text>
      <Box>
        <ExampleSection name="horizontal">
          <Text>Test text</Text>
          <Divider my="md" orientation="horizontal"  />
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
          <Divider color="red.200" my="md" />
          <Text>Test text</Text>
        </ExampleSection>

        <ExampleSection name="custom size">
          <Text>Test text</Text>
          <Divider w={10} my="md" color="blue"  />
          <Text>Test text</Text>

          <Box mt="xl" h={40} flexDirection="row">
          <Text>Test text</Text>
          <Divider h={50} my="md" orientation="vertical" />
          <Text>Test text</Text>
          </Box>
        </ExampleSection>
   
      </Box>
    </SafeAreaBox>
  );
};

export default DividerComponent;
