import {
  Button,
  Flex,
  Icon,
  SafeAreaBox,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalBg = useColorModeValue('white', 'gray.800');

  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Modal
      </Text>
      <ExampleSection name="Simple Modal">
        <Button onPress={onOpen}>Show Modal</Button>
        <Modal
          visible={isOpen}
          onRequestClose={onClose}
          backgroundColor={modalBg}
          width="90%"
          height={200}
          backgroundViewStyle={{justifyContent: 'center'}}
          contentViewStyle={{ borderRadius: 16, overflow: 'hidden', padding: 24 }}
        >
          <Flex>
            <Button
              h={35}
              w={35}
              position="absolute"
              top={10}
              right={10}
              px={0}
              borderRadius="full"
              colorScheme="gray"
              onPress={onClose}
            >
              <Icon color={useColorModeValue('gray.800', 'white')} name="close" />
            </Button>
            <Text fontSize="xl" mb={2}>Hello from Modal!</Text>
            <Text>This is a custom modal content.</Text>
          </Flex>
        </Modal>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default ModalComponent;
