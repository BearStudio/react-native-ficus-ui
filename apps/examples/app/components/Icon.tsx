import ExampleSection from "@/src/ExampleSection";
import { HStack, Icon, SafeAreaBox, ScrollBox, Text, useColorModeValue } from "react-native-ficus-ui";


const IconComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("white", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Icon component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <HStack spacing={10}>
            <Icon name="accessibility" color="blue.700" size="6xl" iconSet="Ionicons" />
            <Icon
              name="star"
              color="yellow.700"
              size="6xl"
              iconSet="Ionicons"
            />
          </HStack>
        </ExampleSection>
        <ExampleSection name="sizes">
          <HStack spacing={10}>
            <Icon name="alarm" color="red.500" size="md"  />
            <Icon name="analytics" color="teal.500" size="xl" />
            <Icon name="heart" color="red.500" size="2xl" />
            <Icon name="brush" color="blue.700" size="6xl" />
          </HStack>
        </ExampleSection>
        <ExampleSection name="back button">
          <HStack spacing={10}>
            <Icon
              bg="yellow.400"
              p={15}
              borderRadius="full"
              name="arrow-back"
              color="yellow.700"
              size="2xl"
              iconSet="Ionicons"
            />
          </HStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default IconComponent;
