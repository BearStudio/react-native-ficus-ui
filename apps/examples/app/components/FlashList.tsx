/* eslint-disable react-native/no-inline-styles */
import { Box, Flex, FlashList, Text, SafeAreaBox, useColorModeValue } from "react-native-ficus-ui";

const FlashListComponent = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        FlashList component
      </Text>
      <Flex mt="xl">
        <FlashList
          bg={useColorModeValue('gray.200', 'gray.700')}
          p="xl"
          data={DATA}
          renderItem={({ item }) => (
            <Box p="lg">
              <Text>{item.title}</Text>
            </Box>
          )}
          estimatedItemSize={200}
        />
      </Flex>
    </SafeAreaBox>
  );
};

export default FlashListComponent;
