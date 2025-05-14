import { Box, Flex, SafeAreaBox, SectionList, Text } from 'react-native-ficus-ui';


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
    <SafeAreaBox>
      <Text mx="xl" fontSize="4xl">
        SectionList component
      </Text>
      <Flex mt="xl">
        <SectionList
          bg="gray.200"
          p="xl"
          sections={DATA}
          keyExtractor={(item:any, index:number) => `${item.title}-${index}`}
          renderItem={({ item }:any) => (
            <Box p="sm">
              <Text>{item}</Text>
            </Box>
          )}
          renderSectionHeader={({ section: { title } }:any) => (
            <Box bg="gray.300" p="sm">
              <Text>{title}</Text>
            </Box>
          )}
        />
      </Flex>
    </SafeAreaBox>
  );
};

export default SectionListComponent;
