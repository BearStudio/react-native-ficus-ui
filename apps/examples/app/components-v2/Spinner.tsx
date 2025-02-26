import ExampleSection from "@/src/ExampleSection";
import { Box, SafeAreaBox, Spinner, Spinner2, Text } from "@ficus-ui/native";


const SpinnerComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Spinner component
      </Text>
      <ExampleSection name="spinner original">
      <Box mx="xl" mt="lg">
        <Spinner2 />
        <Spinner2 color="red" size="small" />
        <Spinner2 color="black" size="large" />
      </Box>
      </ExampleSection>
      <ExampleSection name="spinner ficus">
      <Box mx="xl" mt="lg">
        <Spinner />
        <Spinner color="red" size="small" />
        <Spinner color="black" size="large" />
      </Box>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default SpinnerComponent;
