import { useEffect, useState } from 'react';
import { Badge } from 'react-native-ficus-ui';
import {
  ThemeProvider,
  Box,
  Image,
  HStack,
  Text,
  VStack,
  Input,
  Button,
  Center,
  Spinner,
} from 'react-native-ficus-ui';

export const ItemCard = ({ content, ...props }) => {
  return (
    <VStack
      p={10}
      borderWidth={1}
      borderColor="gray.200"
      borderRadius="lg"
      spacing="md"
      bg="white"
      {...props}
    >
      <Image
        borderRadius="md"
        source={{ uri: content.image }}
        w="100%"
        h={200}
        alt="House image"
      />
      <HStack alignItems="center" mt={2} spacing="sm">
        <Badge colorScheme="pink" fontSize="md">Plus</Badge>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {content.location}
        </Text>
      </HStack>
      <Text fontSize="xl" fontWeight="bold" lineHeight="short">
        {content.name}
      </Text>
      <Text fontSize="lg">{content.price}/night</Text>
      <Box flexDirection="row" alignItems="center">
        <Text fontSize="sm">⭐️</Text>
        <Text ml={5} fontSize="sm" fontWeight="bold">
          {content.scoring} ({content.evaluations})
        </Text>
      </Box>
    </VStack>
  );
};

export const Responsive = () => {
  const item = {
    id: 2,
    image: 'https://bit.ly/3WYtHUM',
    location: 'New-York City',
    name: 'Architectural house',
    price: '200$',
    scoring: 4.85,
    evaluations: 2934,
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Center flex={1}>
          <Spinner color="teal.500" size="lg" />
        </Center>
      ) : (
        <Box w="100%">
          <Box
            flexDirection="row"
            justify={['flex-start', 'center']}
            my="lg"
          >
            <Box
              flexDirection={['column', 'row']}
              w={['100%', undefined]}
            >
              <Input
                placeholder="Search location"
                p={10}
                w={['100%', 300]}
                borderWidth={2}
                focusBorderColor="teal.500"
              />
              <Button
                colorScheme="teal"
                full={[true, false]}
                mt={[5, 0]}
                ml={[0, 5]}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box mt="lg">
            <ItemCard content={item} w={['100%', '50%']} />
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};
