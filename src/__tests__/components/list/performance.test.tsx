import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  List,
  Pressable,
  Text,
  VStack,
} from '@/components';
import { FlatList } from 'react-native';
import { render } from '@testing-library/react-native';

const Card = (item: any) => {
  const { name, thumbnail, label1, label2, label3 } = item.item.values;

  return (
    <Pressable borderRadius="lg" my="sm" onPress={() => console.log('click')}>
      <Box
        h={88}
        bg="gray.800"
        borderRadius="lg"
        p="md"
        borderColor="gray.700"
        borderWidth={1}
        flexDirection="row"
      >
        <Box mr="3">
          <Box
            h="16"
            w="16"
            justifyContent="center"
            alignItems="center"
            zIndex={1}
          >
            <Icon />
          </Box>
          <Image
            h="16"
            w="16"
            source={{
              uri: thumbnail,
            }}
            alt={name}
            resizeMode="cover"
            borderRadius="2"
          />
        </Box>
        <VStack flex={1} justifyContent="space-between" overflow="hidden">
          <Text fontSize="sm" color="white" fontWeight="bold">
            {name}
          </Text>
          <HStack flexDirection="row" flex={1} alignItems="flex-end">
            <Label key="label1" text={label1} />
            <Label key="label2" text={label2} />
            <Label key="label3" text={label3} />
          </HStack>
        </VStack>
        <Center>
          <Icon />
        </Center>
      </Box>
    </Pressable>
  );
};

function Label({ text }: { text: string }) {
  return (
    <HStack
      px="md"
      py="sm"
      mr={2}
      borderRadius="sm"
      alignItems="center"
      bg="gray.900"
    >
      <Box mr={1}>
        <Icon />
      </Box>
      <Text fontSize="xs" fontWeight="bold" color="white">
        {text}
      </Text>
    </HStack>
  );
}

const FicusUiListRenderer = () => {
  return (
    <List
      bg="gray.200"
      p="xl"
      data={LIST_DATA}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

const ReactNativeListRenderer = () => {
  return (
    <FlatList
      data={LIST_DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

test('Component displays in an acceptable duration', () => {
  render(<ReactNativeListRenderer />);
  render(<FicusUiListRenderer />);

  console.time('ReactNative List rendering');
  render(<ReactNativeListRenderer />);
  console.timeEnd('ReactNative List rendering');

  console.time('Ficus UI List rendering');
  render(<FicusUiListRenderer />);
  console.timeEnd('Ficus UI List rendering');
});
