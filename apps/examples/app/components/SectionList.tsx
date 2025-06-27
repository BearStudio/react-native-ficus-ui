import { Box, Flex, SafeAreaBox, SectionList, Text, useColorModeValue } from 'react-native-ficus-ui';


const SectionListComponent = () => {
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
  ]
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        SectionList component
      </Text>
      <Flex mt="xl">
        <SectionList
          bg={useColorModeValue('gray.200', 'gray.700')}
          p="xl"
          sections={DATA}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <Box p="sm">
              <Text>{item as unknown as string}</Text>
            </Box>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Box bg="gray.300" _dark={{ bg: 'gray.800' }} p="sm">
              <Text>{title}</Text>
            </Box>
          )}
        />
      </Flex>
    </SafeAreaBox>
  );
};

export default SectionListComponent;
