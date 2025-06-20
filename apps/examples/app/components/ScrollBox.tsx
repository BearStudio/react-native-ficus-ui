import { Box, SafeAreaBox, ScrollBox, Text, useColorModeValue } from 'react-native-ficus-ui';

import ExampleSection from '@/src/ExampleSection';

const ScrollBoxComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        ScrollBox component
      </Text>
      <ScrollBox>
        <ExampleSection name="background color">
          <Box>
            <Box h={40} w={40} mr="sm" bg="red.500" />
            <Box h={40} w={40} mr="sm" bg="blue.500" />
            <Box h={40} w={40} mr="sm" bg="gray.500" />
            <Box h={40} w={40} mr="sm" bg="green.500" />
            <Box h={40} w={40} mr="sm" bg="teal.500" />
            <Box h={40} w={40} mr="sm" bg="yellow.500" />
            <Box h={40} w={40} mr="sm" bg="red.500" />
            <Box h={40} w={40} mr="sm" bg="blue.500" />
            <Box h={40} w={40} mr="sm" bg="gray.500" />
          </Box>
        </ExampleSection>
        <ExampleSection name="shadows">
          <Box>
            <Box
              h={40}
              w={40}
              bg="white"
              m="md"
              borderRadius="sm"
              shadow="none"
              justifyContent="center"
              alignItems="center"
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
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
              _dark={{ shadowColor: 'white' }}
            >
              <Text>2xl</Text>
            </Box>
          </Box>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default ScrollBoxComponent;
