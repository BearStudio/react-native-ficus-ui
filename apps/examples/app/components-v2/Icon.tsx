import ExampleSection from "@/src/ExampleSection";
import { HStack, Icon, SafeAreaBox, ScrollBox, Text } from "@ficus-ui/native";


const IconComponent = () => {
  return (
    <SafeAreaBox>
      <Text mx="xl" fontSize="4xl">
        Icon component
      </Text>
      <ScrollBox>
        <ExampleSection name="default">
          <HStack spacing={10}>
            <Icon name="accessibility" color="blue.700" fontSize="6xl" fontFamily="Ionicons" />
            <Icon
              name="star"
              color="yellow.700"
              fontSize="6xl"
              fontFamily="Ionicons"
            />
          </HStack>
        </ExampleSection>
        <ExampleSection name="sizes">
          <HStack spacing={10}>
            <Icon name="alarm" color="red.500" fontSize="md"  />
            <Icon name="analytics" color="teal.500" fontSize="xl" />
            <Icon name="heart" color="red.500" fontSize="2xl" />
            <Icon name="brush" color="blue.700" fontSize="6xl" />
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
              fontSize="2xl"
              fontFamily="Ionicons"
            />
          </HStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default IconComponent;
