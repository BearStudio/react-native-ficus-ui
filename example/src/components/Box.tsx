import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-ficus-ui';
import ExampleSection from '../ExampleSection';

const BoxComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        Box component
      </Text>
      <ScrollView>
        <ExampleSection name="background color">
          <Box flexDir="row">
            <Box h={40} w={40} mr="sm" bg="green.500" />
            <Box h={40} w={40} mr="sm" bg="teal.500" />
            <Box h={40} w={40} mr="sm" bg="yellow.500" />
            <Box h={40} w={40} mr="sm" bg="red.500" />
            <Box h={40} w={40} mr="sm" bg="blue.500" />
            <Box h={40} w={40} mr="sm" bg="gray.500" />
          </Box>
        </ExampleSection>

        <ExampleSection name="shadows">
          <Box flexDir="row">
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="none"
              justifyContent="center"
              alignItems="center"
            >
              <Text>none</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="xs"
              justifyContent="center"
              alignItems="center"
            >
              <Text>xs</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="sm"
              justifyContent="center"
              alignItems="center"
            >
              <Text>sm</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="md"
              justifyContent="center"
              alignItems="center"
            >
              <Text>md</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="lg"
              justifyContent="center"
              alignItems="center"
            >
              <Text>lg</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="xl"
              justifyContent="center"
              alignItems="center"
            >
              <Text>xl</Text>
            </Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="2xl"
              justifyContent="center"
              alignItems="center"
            >
              <Text>2xl</Text>
            </Box>
          </Box>
        </ExampleSection>

        <ExampleSection name="border">
          <Box flexDir="row">
            <Box
              h={40}
              w={40}
              mr="sm"
              borderColor="green.500"
              borderWidth={1}
            />
            <Box
              h={40}
              w={40}
              mr="sm"
              borderColor="yellow.500"
              borderWidth={1}
            />
            <Box h={40} w={40} mr="sm" borderColor="red.500" borderWidth={1} />
            <Box h={40} w={40} mr="sm" borderColor="blue.500" borderWidth={1} />
            <Box h={40} w={40} mr="sm" borderColor="gray.500" borderWidth={1} />
          </Box>
        </ExampleSection>

        <ExampleSection name="radius">
          <Box flexDir="row">
            <Box h={40} w={40} mr="sm" borderRadius="none" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="xs" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="sm" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="md" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="lg" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="xl" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="2xl" bg="blue.400" />
            <Box h={40} w={40} mr="sm" borderRadius="full" bg="blue.400" />
          </Box>
        </ExampleSection>

        <ExampleSection name="flex">
          <Box direction="row">
            <Box h={40} w={40} bg="red.400" flex={1} />
            <Box h={40} w={40} bg="yellow.400" flex={2} />
            <Box h={40} w={40} bg="green.400" flex={2} />
          </Box>
        </ExampleSection>

        <ExampleSection name="background image">
          <Box
            mt="sm"
            borderRadius="md"
            h={150}
            bgImg={{
              uri:
                'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Monochrome-Type-Simple-Background-Image.jpg',
            }}
          />
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoxComponent;
