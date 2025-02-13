import { SafeAreaView } from "react-native";
import { Flex, Text } from "react-native-ficus-ui";

const FlexComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Flex component
      </Text>
      <Flex bg="red.500" />
    </SafeAreaView>
  );
};

export default FlexComponent;
