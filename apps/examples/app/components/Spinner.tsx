import { Box, SafeAreaBox, Spinner, Text } from "../../../../packages/components/src";


const SpinnerComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Spinner component
      </Text>
      <Box mx="xl" mt="lg">
        <Spinner />
        <Spinner color="red" size="large" />
        <Spinner color="green.500" size="large" />
      </Box>
    </SafeAreaBox>
  );
};

export default SpinnerComponent;
