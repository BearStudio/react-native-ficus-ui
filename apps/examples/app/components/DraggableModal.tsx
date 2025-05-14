import { SafeAreaView } from "react-native";
import {
  Button,
  Text,
  useDisclosure,
  DraggableModal
} from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const DraggableModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        DraggableModal
      </Text>
      <ExampleSection name="Simple Modal">
        <Button
          colorScheme={!isOpen ? "green" : "red"}
          onPress={() => {
            if (!isOpen) {
              onOpen();
            } else {
              onClose();
            }
          }}
        >
          {!isOpen ? "Show Modal" : "Hide Modal"}
        </Button>

        <DraggableModal
          isOpen={isOpen}
          onClose={onClose}
          snapPoints={["30%", "80%"]}
          p='sm'
        >
          <Text fontSize="4xl" fontWeight="bold">
            Settings
          </Text>

          <Text mt="xl">Your settings</Text>
        </DraggableModal>
      </ExampleSection>
    </SafeAreaView>
  );
};

export default DraggableModalComponent;
