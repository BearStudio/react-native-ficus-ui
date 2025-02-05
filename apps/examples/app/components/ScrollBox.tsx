import { SafeAreaView } from "react-native";
import { Box, ScrollBox, Text } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const ScrollBoxComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        ScrollBox component
      </Text>
      <ScrollBox h="100%">
        <ExampleSection name="background color">
          <Box flexDirection="row">
            <Box h={40} w={40} mr="sm" bg="green.500" />
            <Box h={40} w={40} mr="sm" bg="teal.500" />
            <Box h={40} w={40} mr="sm" bg="yellow.500" />
            <Box h={40} w={40} mr="sm" bg="red.500" />
            <Box h={40} w={40} mr="sm" bg="blue.500" />
            <Box h={40} w={40} mr="sm" bg="gray.500" />
          </Box>
        </ExampleSection>
        <ExampleSection name="shadows">
          <Box flexDirection="row">
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
      </ScrollBox>
    </SafeAreaView>
  );
};

export default ScrollBoxComponent;
