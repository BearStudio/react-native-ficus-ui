import {
  Box,
  Button,
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
    <SafeAreaBox flex={1} bg={useColorModeValue('gray.100', 'gray.800')}>
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

        <Modal isOpen={isOpen} onBackdropPress={onClose}>
          <Box
            bg="white"
            h={200}
            p="xl"
            borderRadius="xl"
            _dark={{ bg: 'gray.800' }}
          >
            <Text fontSize="xl" fontWeight="bold">
              Hello from Modal!
            </Text>
            <Text mt="sm">This is a custom modal content.</Text>

            <Button
              h={35}
              w={35}
              position="absolute"
              top={15}
              right={15}
              px={0}
              borderRadius="full"
              colorScheme="gray"
              onPress={() => {
                onClose();
              }}
            >
              <Icon
                color={useColorModeValue('white', 'gray.800')}
                name="close"
              />
            </Button>
          </Box>
        </Modal>
      </ExampleSection>
    </SafeAreaBox>
  );
};

export default ModalComponent;
