import { SafeAreaView, ScrollView } from "react-native";
import { IconButton, Icon, Text, HStack, VStack } from "react-native-ficus-ui";
import ExampleSection from "@/src/ExampleSection";

const IconButtonComponent = () => {
  return (
    <SafeAreaView>
      <Text mx="xl" fontSize="4xl">
        IconButton component
      </Text>
      <ScrollView>
        <ExampleSection name="default">
          <VStack spacing={10}>
            <IconButton icon={<Icon name="search1" />} size="xs" />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="pink"
              size="sm"
            />
            <IconButton icon={<Icon name="search1" />} colorScheme="teal" />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="blue"
              size="lg"
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="red"
              size="xl"
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="orange"
              size="2xl"
            />
          </VStack>
        </ExampleSection>

        <ExampleSection name="round">
          <VStack spacing={10}>
            <IconButton icon={<Icon name="search1" />} size="xs" isRound />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="pink"
              size="sm"
              isRound
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              isRound
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="blue"
              size="lg"
              isRound
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="red"
              size="xl"
              isRound
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="orange"
              size="2xl"
              isRound
            />
          </VStack>
        </ExampleSection>

        <ExampleSection name="variants">
          <HStack spacing={10}>
            <IconButton icon={<Icon name="search1" />} colorScheme="teal" />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              variant="outline"
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              variant="ghost"
            />
          </HStack>
          <VStack spacing={10} mt="xl">
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              full
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              variant="outline"
              full
            />
            <IconButton
              icon={<Icon name="search1" />}
              colorScheme="teal"
              variant="ghost"
              full
            />
          </VStack>
        </ExampleSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IconButtonComponent;
