import { SafeAreaView } from "react-native";
import { Box, TouchableHighlight, Text } from "react-native-ficus-ui";

const TouchableHighlightComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        TouchableHighlight component
      </Text>
      <Box mx="xl" mt="lg">
        <TouchableHighlight onPress={() => console.log("Pressed")}>
          <Text>Test</Text>
        </TouchableHighlight>
        <TouchableHighlight
          bg="red.300"
          p="xl"
          borderRadius="xl"
          underlayColor="white"
          activeOpacity={0.5}
          onPress={() => console.log("Pressed")}
        >
          <Text>Test</Text>
        </TouchableHighlight>
      </Box>
    </SafeAreaView>
  );
};

export default TouchableHighlightComponent;
