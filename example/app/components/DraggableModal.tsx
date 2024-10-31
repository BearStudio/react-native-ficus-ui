import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Button,
  Icon,
  DraggableModal,
  Text,
  useDisclosure,
} from 'react-native-ficus-ui';
import ExampleSection from '@/src/ExampleSection';

const DraggableModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        DraggableModal
      </Text>
      <ExampleSection name="Simple Modal">
        <Button
          onPress={() => {
            onOpen();
          }}
        >
          Show Modal
        </Button>

        <DraggableModal
          isOpen={isOpen}
          onClose={onClose}
          snapPoints={['20%', '80%']}
          p="xl"
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
