import React, { useState } from 'react';

import {
  Box,
  Button,
  HStack,
  SafeAreaBox,
  ScrollBox,
  Skeleton,
  SkeletonCircle,
  SkeletonProvider,
  SkeletonText,
  Text,
  VStack,
  useColorModeValue,
} from 'react-native-ficus-ui';

const SkeletonComponent = () => {
  const [loading, setLoading] = useState(true);

  const toggleLoading = () => setLoading(!loading);

  return (
    <SafeAreaBox flex={1} bg={useColorModeValue('gray.100', 'gray.800')}>
      <ScrollBox>
        <Text mx="xl" fontSize="4xl" mb="md">
          Skeleton Component
        </Text>

        <Box px="xl">
          <Button onPress={toggleLoading} mb="lg">
            {loading ? 'Show Content' : 'Show Skeleton'}
          </Button>

          {/* Basic Skeleton */}
          <VStack gap="6" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Basic Skeleton
            </Text>
            <HStack gap="md">
              <VStack flex={1} gap="xs">
                <SkeletonText loading={loading} variant="none">
                  <Text>Content loaded!</Text>
                </SkeletonText>
                <SkeletonText w="80%" loading={loading}>
                  <Text>Another line of content</Text>
                </SkeletonText>
              </VStack>
            </HStack>
          </VStack>

          {/* Feed Skeleton */}
          <VStack gap="lg" mb="xl" maxW="xs">
            <Text fontSize="2xl" fontWeight="bold">
              Feed Skeleton
            </Text>
            <HStack w="full" gap="sm">
              <SkeletonCircle size={48} loading={loading} />
              <SkeletonText noOfLines={2} gap="xs" loading={loading}>
                <VStack gap="xs">
                  <Text>User Name</Text>
                  <Text fontSize="sm" color="gray.500">2 hours ago</Text>
                </VStack>
              </SkeletonText>
            </HStack>
            <Skeleton h={200} loading={loading}>
              <Box h={200} bg="blue.200" borderRadius="md" />
            </Skeleton>
          </VStack>

          {/* Text Skeleton */}
          <VStack gap="lg" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Text Skeleton
            </Text>
            <SkeletonText noOfLines={3} gap="sm" loading={loading}>
              <VStack gap="sm">
                <Text>This is the first line of text content that was loaded.</Text>
                <Text>This is the second line showing more content.</Text>
                <Text>And this is the third line with even more information.</Text>
              </VStack>
            </SkeletonText>
          </VStack>

          {/* Variants */}
          <VStack gap="md" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Variants
            </Text>
            <HStack gap="md" alignItems="center">
              <Text minW="60">pulse</Text>
              <Skeleton flex={1} h={20} variant="pulse" loading={loading} />
            </HStack>
            <HStack gap="md" alignItems="center">
              <Text minW="60">shine</Text>
              <Skeleton flex={1} h={20} variant="shine" loading={loading} />
            </HStack>
            <HStack gap="md" alignItems="center">
              <Text minW="60">none</Text>
              <Skeleton flex={1} h={20} variant="none" loading={loading} />
            </HStack>
          </VStack>

          {/* Color Palette */}
          <VStack gap="md" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Color Palettes
            </Text>
            <HStack gap="md" alignItems="center">
              <Text minW="60">gray</Text>
              <Skeleton flex={1} h={20} colorPalette="gray" loading={loading} />
            </HStack>
            <HStack gap="md" alignItems="center">
              <Text minW="60">blue</Text>
              <Skeleton flex={1} h={20} colorPalette="blue" loading={loading} />
            </HStack>
            <HStack gap="md" alignItems="center">
              <Text minW="60">green</Text>
              <Skeleton flex={1} h={20} colorPalette="green" loading={loading} />
            </HStack>
          </VStack>

          {/* Async Animations Demo */}
          <VStack gap="sm" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Async Animations (Staggered)
            </Text>
            <Text fontSize="sm" color="gray.500" mb="xs">
              Notice how these skeletons appear with different delays
            </Text>
            <VStack gap="xs">
              {Array.from({ length: 5 }, (_, i) => (
                <Skeleton key={i} h={16} loading={loading} />
              ))}
            </VStack>
          </VStack>

          {/* Synchronized Animations with Provider */}
          <VStack gap="sm" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Synchronized Animations (Provider)
            </Text>
            <Text fontSize="sm" color="gray.500" mb="xs">
              All skeletons animate together with SkeletonProvider
            </Text>
            <SkeletonProvider duration={1500}>
              <VStack gap="sm">
                <HStack gap="sm">
                  <SkeletonCircle size={40} loading={loading} />
                  <VStack flex={1} gap="xs">
                    <Skeleton h={16} loading={loading} />
                    <Skeleton h={16} w="70%" loading={loading} />
                  </VStack>
                </HStack>
                <Skeleton h={80} loading={loading} />
                <SkeletonText noOfLines={2} gap="xs" loading={loading}>
                  <VStack gap="xs">
                    <Text>Synchronized content line 1</Text>
                    <Text>Synchronized content line 2</Text>
                  </VStack>
                </SkeletonText>
              </VStack>
            </SkeletonProvider>
          </VStack>

          {/* Different Circle Sizes */}
          <VStack gap="sm" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Circle Sizes
            </Text>
            <HStack gap="sm" alignItems="center">
              <SkeletonCircle size={24} loading={loading} />
              <SkeletonCircle size={32} loading={loading} />
              <SkeletonCircle size={40} loading={loading} />
              <SkeletonCircle size={56} loading={loading} />
              <SkeletonCircle size={72} loading={loading} />
            </HStack>
          </VStack>

          {/* Card Layout Example */}
                    {/* Card Layout Example */}
          <VStack gap="sm" mb="xl">
            <Text fontSize="2xl" fontWeight="bold">
              Card Layout
            </Text>
            <Box p="sm" bg="white" borderRadius="lg" shadow="2">
              <HStack gap="sm">
                <SkeletonCircle size={60} loading={loading} />
                <VStack flex={1} gap="xs">
                  <Skeleton h={18} w="80%" loading={loading}>
                    <Text fontSize="lg" fontWeight="bold">
                      John Doe
                    </Text>
                  </Skeleton>
                  <Skeleton h={14} w="60%" loading={loading}>
                    <Text color="gray.600">Software Engineer</Text>
                  </Skeleton>
                  <SkeletonText
                    noOfLines={2}
                    gap="xs"
                    fontSize="sm"
                    loading={loading}
                  >
                    <VStack gap="xs">
                      <Text>Passionate developer with years of experience</Text>
                      <Text>in React Native and mobile development.</Text>
                    </VStack>
                  </SkeletonText>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default SkeletonComponent;
