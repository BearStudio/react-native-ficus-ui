/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Flex, List, Text } from '@/components';

const ListComponent = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        List component
      </Text>
      <Flex mt="xl">
        <List
          bg="gray.200"
          p="xl"
          data={DATA}
          renderItem={({ item }) => (
            <Box p="lg">
              <Text>{item.title}</Text>
            </Box>
          )}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default ListComponent;
