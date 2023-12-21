import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Spinner, Text } from '@/components';

const SpinnerComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Spinner component
      </Text>
      <Box mx="xl" mt="lg">
        <Spinner />
        <Spinner color="blue.500" size="sm" />
        <Spinner color="red.500" size="lg" />
        <Spinner color="green.500" size="lg" />
        <Spinner color="pink.500" size="lg" />
      </Box>
    </SafeAreaView>
  );
};

export default SpinnerComponent;
