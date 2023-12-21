import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Flex, SectionList, Text } from '@/components';

const SectionListComponent = () => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        SectionList component
      </Text>
      <Flex mt="xl">
        <SectionList
          bg="gray.200"
          p="xl"
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Box p="sm">
              <Text>{item}</Text>
            </Box>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Box bg="gray.300" p="sm">
              <Text>{title}</Text>
            </Box>
          )}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default SectionListComponent;
