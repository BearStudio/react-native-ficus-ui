import {
  Button,
  Flex,
  Icon,
  Modal,
  SafeAreaBox,
  Text,
  useColorModeValue,
  useDisclosure,
} from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
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
          <Flex _dark={{ bg: 'gray.800' }}>
            <Button
              h={35}
              w={35}
              position="absolute"
              top={50}
              right={15}
              px={0}
              borderRadius="full"
              colorScheme="gray"
              onPress={() => {
                onClose();
              }}
            >
              <Icon color={useColorModeValue('white', 'gray.800')} name="close" />
            </Button>
          </Flex>
        </Modal>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default ModalComponent;
