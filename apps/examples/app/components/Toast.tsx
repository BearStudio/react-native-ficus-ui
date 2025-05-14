import { SafeAreaView } from "react-native";
import { Button, Text, VStack, useToast } from "../../../../packages/components/src";
import ExampleSection from "@/src/ExampleSection";

const ToastHook = () => {
  const { show, hide } = useToast();
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Toast
      </Text>
      <ExampleSection name="Simple Toast">
        <VStack spacing={10}>
          <Button
            onPress={() => {
              show({
                type: "success",
                text1: "Hello",
                text2: "This is some something 👋",
              });
            }}
            colorScheme="green"
          >
            Show Success
          </Button>
          <Button
            onPress={() => {
              show({
                type: "error",
                text1: "Hello",
                text2: "This is some something 👋",
              });
            }}
            colorScheme="red"
          >
            Show error
          </Button>
          <Button
            onPress={() => {
              show({
                type: "warning",
                text1: "Hello",
                text2: "This is some something 👋",
              });
            }}
            colorScheme="orange"
          >
            Show warning
          </Button>
          <Button
            onPress={() => {
              show({
                type: "info",
                text1: "Hello",
                text2: "This is some something 👋",
              });
            }}
            colorScheme="blue"
          >
            Show info
          </Button>
          <Button
            onPress={() => {
              hide();
            }}
            colorScheme="gray"
          >
            Hide Toast
          </Button>
        </VStack>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default ToastHook;
