import { Box, SafeAreaBox, Spinner, Text, useColorModeValue } from "react-native-ficus-ui";


const SpinnerComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
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
