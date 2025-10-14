import React, { useState } from 'react';

import {
  Box,
  Button,
  HStack,
  SafeAreaBox,
  ScrollBox,
  Skeleton,
  SkeletonProvider,
  Text,
  VStack,
  useColorModeValue,
} from 'react-native-ficus-ui';

const SkeletonComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleLoading = () => setIsLoaded(!isLoaded);

  return (
    <SafeAreaBox flex={1} bg={useColorModeValue('gray.100', 'gray.800')}>
      <ScrollBox>
        <Text mx="xl" fontSize="4xl" mb="md">
          Skeleton Component
        </Text>

        <Box px="xl">
          <Button onPress={toggleLoading} mb="lg">
            {isLoaded ? 'Show Skeleton' : 'Show Content'}
          </Button>

          <Text fontSize="2xl" mb="md">
            Basic Usage
          </Text>
          <VStack spacing="md" mb="xl">
            <Skeleton isLoaded={isLoaded}>
              <Text>This is some content that will be loaded</Text>
            </Skeleton>

            <Skeleton.Box w="200" h="10" isLoaded={isLoaded}>
              <Box w="200" h="10" bg="blue.500" borderRadius="md" />
            </Skeleton.Box>
          </VStack>

          <Text fontSize="2xl" mb="md">
            Skeleton.Text Examples
          </Text>
          <VStack spacing="md" mb="xl">
            <Skeleton.Text fontSize="sm" isLoaded={isLoaded}>
              <Text fontSize="sm">Small text content</Text>
            </Skeleton.Text>

            <Skeleton.Text fontSize="xl" isLoaded={isLoaded}>
              <Text fontSize="xl">Large text content</Text>
            </Skeleton.Text>

            <Skeleton.Text noOfLines={3} isLoaded={isLoaded}>
              <VStack>
                <Text>This is a multi-line text</Text>
                <Text>that spans across multiple lines</Text>
                <Text>to demonstrate the skeleton effect</Text>
              </VStack>
            </Skeleton.Text>
          </VStack>

          <Text fontSize="2xl" mb="md">
            Skeleton.Circle Examples
          </Text>
          <HStack spacing="md" mb="xl">
            <Skeleton.Circle boxSize="40" isLoaded={isLoaded}>
              <Box w="40" h="40" bg="green.500" borderRadius="full" />
            </Skeleton.Circle>

            <Skeleton.Circle boxSize="60" isLoaded={isLoaded}>
              <Box w="60" h="60" bg="red.500" borderRadius="full" />
            </Skeleton.Circle>

            <Skeleton.Circle boxSize="80" isLoaded={isLoaded}>
              <Box w="80" h="80" bg="purple.500" borderRadius="full" />
            </Skeleton.Circle>
          </HStack>

          <Text fontSize="2xl" mb="md">
            With SkeletonProvider (Synchronized Animation)
          </Text>
          <SkeletonProvider>
            <VStack spacing="md" mb="xl">
              <HStack spacing="md" alignItems="center">
                <Skeleton.Circle boxSize="50" isLoaded={isLoaded}>
                  <Box w="50" h="50" bg="blue.500" borderRadius="full" />
                </Skeleton.Circle>

                <VStack flex={1} spacing="xs">
                  <Skeleton.Text fontSize="lg" isLoaded={isLoaded}>
                    <Text fontSize="lg" fontWeight="bold">
                      User Name
                    </Text>
                  </Skeleton.Text>

                  <Skeleton.Text fontSize="sm" w="70%" isLoaded={isLoaded}>
                    <Text fontSize="sm" color="gray.500">
                      @username
                    </Text>
                  </Skeleton.Text>
                </VStack>
              </HStack>

              <Skeleton.Text noOfLines={2} isLoaded={isLoaded}>
                <VStack spacing="xs">
                  <Text>This is a user post content that</Text>
                  <Text>demonstrates synchronized skeleton loading.</Text>
                </VStack>
              </Skeleton.Text>
            </VStack>
          </SkeletonProvider>

          <Text fontSize="2xl" mb="md">
            Card Layout Example
          </Text>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            p="lg"
            borderRadius="lg"
            shadow="sm"
          >
            <VStack spacing="md">
              <HStack spacing="md" alignItems="center">
                <Skeleton.Circle boxSize="40" isLoaded={isLoaded}>
                  <Box w="40" h="40" bg="orange.500" borderRadius="full" />
                </Skeleton.Circle>

                <VStack flex={1} spacing="xs">
                  <Skeleton.Text w="60%" isLoaded={isLoaded}>
                    <Text fontWeight="bold">Article Title</Text>
                  </Skeleton.Text>

                  <Skeleton.Text w="40%" fontSize="sm" isLoaded={isLoaded}>
                    <Text fontSize="sm" color="gray.500">
                      2 hours ago
                    </Text>
                  </Skeleton.Text>
                </VStack>
              </HStack>

              <Skeleton.Box h="100" borderRadius="md" isLoaded={isLoaded}>
                <Box h="100" bg="gray.300" borderRadius="md" />
              </Skeleton.Box>

              <Skeleton.Text noOfLines={3} isLoaded={isLoaded}>
                <VStack spacing="xs">
                  <Text>This is the article content preview.</Text>
                  <Text>It shows how skeleton loading works</Text>
                  <Text>with complex card layouts.</Text>
                </VStack>
              </Skeleton.Text>
            </VStack>
          </Box>
        </Box>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default SkeletonComponent;
