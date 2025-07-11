import { IconButton, Icon, Text, HStack, VStack, SafeAreaBox, ScrollBox, useColorModeValue } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const IconButtonComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        IconButton component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <VStack spacing={10}>
            <IconButton icon={<Icon name="heart" />} size="xs" />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="yellow"
              size="sm"
            />
            <IconButton icon={<Icon name="heart" />} colorScheme="teal" />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="blue"
              size="lg"
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="red"
              size="xl"
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="orange"
              size="2xl"
            />
          </VStack>
        </ExampleSection>

        <ExampleSection name="round">
          <VStack spacing={10}>
            <IconButton icon={<Icon name="heart" />} size="xs" isRound />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="pink"
              size="sm"
              isRound
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              isRound
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="blue"
              size="lg"
              isRound
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="red"
              size="xl"
              isRound
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="orange"
              size="2xl"
              isRound
            />
          </VStack>
        </ExampleSection>

        <ExampleSection name="variants">
          <HStack spacing={10}>
            <IconButton icon={<Icon name="heart" />} colorScheme="teal" />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              variant="outline"
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              variant="ghost"
            />
          </HStack>
          <VStack spacing={10} mt="xl">
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              full
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              variant="outline"
              full
            />
            <IconButton
              icon={<Icon name="heart" />}
              colorScheme="teal"
              variant="ghost"
              full
            />
          </VStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default IconButtonComponent;
