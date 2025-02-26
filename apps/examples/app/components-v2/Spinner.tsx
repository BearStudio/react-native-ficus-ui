import { Box, SafeAreaBox, Spinner, Text } from "@ficus-ui/native";


const SpinnerComponent = () => {
  return (
    <SafeAreaBox style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Spinner component
      </Text>
      <Box mx="xl" mt="lg">
        <Spinner />
        <Spinner color="red" size="small" />
        <Spinner color="black" size="large" />
      </Box>
    </SafeAreaBox>
  );
};

export default SpinnerComponent;
