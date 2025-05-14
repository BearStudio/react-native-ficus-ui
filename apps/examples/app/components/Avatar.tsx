import { SafeAreaView } from 'react-native';

import ExampleSection from '@/src/ExampleSection';
import { Avatar, AvatarBadge, AvatarGroup, HStack, ScrollBox, Text } from '../../../../packages/components/src';

const AvatarComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollBox bg="white">
      <Text mx="xl" fontSize="4xl">
        Avatar component
      </Text>
        <ExampleSection name="avatar with photo">
          <HStack spacing="md">
            <Avatar
              name="Nicolas Torion"
              src="https://avatars.githubusercontent.com/u/53612278?v=4"
            />
          </HStack>
        </ExampleSection>

        {/* <ExampleSection name="avatar with icon">
          <HStack spacing="md">
            <Avatar />
            <Avatar fontFamily="AntDesign" icon="user" />
          </HStack>
        </ExampleSection> */}

        <ExampleSection name="avatar color generated">
          <HStack spacing="md">
            <Avatar name="Nicolas Torion" size="xs" />
            <Avatar name="Omar Borji" size="sm" />
            <Avatar name="Deelan" size="md" />
            <Avatar name="Mark Cavendish" size="lg" />
            <Avatar name="Antoine Dupont" size="xl" />
          </HStack>
        </ExampleSection>

        <ExampleSection name="avatar color scheme">
          <HStack spacing="md">
            <Avatar name="Nicolas Torion" size="xs" colorScheme="blue" />
            <Avatar name="Omar Borji" size="sm" colorScheme="orange" />
            <Avatar name="Deelan" size="md" colorScheme="green" />
            <Avatar name="Mark Cavendish" size="lg" colorScheme="red" />
            <Avatar name="Antoine Dupont" size="xl" colorScheme="purple" />
          </HStack>
        </ExampleSection>

        <ExampleSection name="avatar group">
          <AvatarGroup>
            <Avatar
              name="Nicolas Torion"
              src="https://avatars.githubusercontent.com/u/53612278?v=4"
            />
            <Avatar
              name="Omar Borji"
              src="https://avatars.githubusercontent.com/u/80390318?s=60&v=4"
            />
            <Avatar name="Deelan" colorScheme="green" />
            <Avatar name="Mark Cavendish" colorScheme="red" />
            <Avatar name="Antoine Dupont" colorScheme="purple" />
            <Avatar name="Zinédine Zidane" colorScheme="pink" />
          </AvatarGroup>

          <AvatarGroup size="lg" max={2}>
            <Avatar
              name="Nicolas Torion"
              src="https://avatars.githubusercontent.com/u/53612278?v=4"
            />
            <Avatar
              name="Omar Borji"
              src="https://avatars.githubusercontent.com/u/80390318?s=60&v=4"
            />
            <Avatar name="Deelan" colorScheme="green" />
            <Avatar name="Mark Cavendish" colorScheme="red" />
            <Avatar name="Antoine Dupont" colorScheme="purple" />
            <Avatar name="Zinédine Zidane" colorScheme="pink" />
          </AvatarGroup>
        </ExampleSection>
        <ExampleSection name="avatar badge">
          <HStack spacing="md">
            <Avatar
              name="Nicolas Torion"
              src="https://avatars.githubusercontent.com/u/53612278?v=4"
            >
              <AvatarBadge />
            </Avatar>
            <Avatar
              name="Omar Borji"
              src="https://avatars.githubusercontent.com/u/80390318?s=60&v=4"
            >
              <AvatarBadge />
            </Avatar>
            <Avatar name="Deelan" colorScheme="green">
              <AvatarBadge />
            </Avatar>
          </HStack>
        </ExampleSection>

        <ExampleSection name="avatar badge and group">
          <HStack spacing="md">
            <AvatarGroup size="lg">
              <Avatar
                name="Nicolas Torion"
                src="https://avatars.githubusercontent.com/u/53612278?v=4"
              >
                <AvatarBadge />
              </Avatar>
              <Avatar
                name="Omar Borji"
                src="https://avatars.githubusercontent.com/u/80390318?s=60&v=4"
              >
                <AvatarBadge bg='yellow' />
              </Avatar>
              <Avatar name="Deelan" colorScheme="green">
                <AvatarBadge bg='red' />
              </Avatar>
            </AvatarGroup>
          </HStack>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaView>
  );
};

export default AvatarComponent;
