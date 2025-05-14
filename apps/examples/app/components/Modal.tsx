import {
  Button,
  Icon,
  Modal,
  SafeAreaBox,
  Text,
  useDisclosure,
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SafeAreaBox>
      <Text mx="xl" fontSize="4xl">
        Modal
      </Text>
      <ExampleSection name="Simple Modal">
        <Button
          onPress={() => {
            onOpen();
          }}
        >
          Show Modal
        </Button>

        <Modal visible={isOpen}>
          <Button
            h={35}
            w={35}
            position="absolute"
            top={50}
            right={15}
            borderRadius="full"
            colorScheme="gray"
            onPress={() => {
              onClose();
            }}
          >
            <Icon color="white" name="close" />
          </Button>
        </Modal>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default ModalComponent;
