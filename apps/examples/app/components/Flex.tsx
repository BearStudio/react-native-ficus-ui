import { Flex, Text, SafeAreaBox, useColorModeValue } from "react-native-ficus-ui";

const FlexComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Flex component
      </Text>
      <Flex bg="red.500" />
    </SafeAreaBox>
  );
};

export default FlexComponent;
