import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Icon,
  HStack,
  Heading,
  Highlight,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from 'react';
import { LuPalette, LuComponent, LuGithub } from 'react-icons/lu';

export const HomepageTitle = ({ children }) => {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState('gray.800');

  useEffect(() => {
    setTextColor(theme === 'dark' ? 'white' : 'gray.800');
  }, [theme]);

  return (
    <Heading
      fontSize={['2xl', '4xl']}
      textAlign="center"
      lineHeight="lg"
      color={textColor}
      mb="2rem"
    >
      {children}
    </Heading>
  );
};

export const HomepageHeader = () => {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState('gray.800');

  useEffect(() => {
    setTextColor(theme === 'dark' ? 'white' : 'gray.800');
  }, [theme]);

  return (
    <Box my="4rem">
      <Heading
        fontSize={['4xl', '6xl']}
        textAlign="center"
        lineHeight="lg"
        color={textColor}
      >
        <Highlight
          query={['easily', 'fastly ⚡️']}
          styles={{
            px: '2',
            py: '1',
            rounded: 'full',
            bg: 'brand.200',
          }}
        >
          Create React Native apps UI easily and fastly ⚡️
        </Highlight>
      </Heading>

      <Text fontSize={['lg', 'xl']} textAlign="center" mt="2rem">
        Ficus UI is a simple, modular and accessible UI library for React
        Native, forked from Magnus UI and inspired by Chakra UI
      </Text>

      <Center mt="2rem">
        <HStack spacing={3}>
          <Button
            as={Link}
            colorScheme="brand"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            href="/docs/getting-started"
          >
            Get started
          </Button>

          <Button
            as={Link}
            colorScheme="brand"
            size="lg"
            rightIcon={<LuGithub />}
            variant="outline"
            href="https://github.com/BearStudio/react-native-ficus-ui"
            target="_blank"
          >
            Github
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

const Feature = ({ title, description, featureIcon, images }) => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState('gray.50');
  const [borderColor, setBorderColor] = useState('gray.100');
  const [textColor, setTextColor] = useState('gray.800');

  useEffect(() => {
    setBgColor(theme === 'dark' ? 'gray.800' : 'white');
    setBorderColor(theme === 'dark' ? 'gray.600' : 'gray.100');
    setTextColor(theme === 'dark' ? 'white' : 'gray.800');
  }, [theme]);

  return (
    <Box
      p="1rem"
      borderRadius={10}
      bg={bgColor}
      shadow="sm"
      borderColor={borderColor}
      borderWidth="1px"
    >
      {featureIcon ? (
        <Center bg="brand.100" w="50px" h="50px" borderRadius="100%">
          <Icon as={featureIcon} color="brand.700" fontSize="2xl" />
        </Center>
      ) : (
        images
      )}

      <Text fontWeight="bold" fontSize="xl" mt="1rem" color={textColor}>
        {title}
      </Text>
      <Text mt="0.5rem">{description}</Text>
    </Box>
  );
};

export const GraySection = ({ children }) => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState('gray.50');

  useEffect(() => {
    setBgColor(theme === 'dark' ? 'gray.900' : 'gray.50');
  }, [theme]);

  return (
    <Box
      bg={bgColor}
      w="100vw"
      marginLeft="calc(-50vw + 50%)"
      mt="2rem"
      py="4rem"
    >
      <Box w="80vw" marginLeft="calc(-40vw + 50%)">
        {children}
      </Box>
    </Box>
  );
};

export const Features = () => (
  <GraySection>
    <SimpleGrid flex={1} columns={[1, 1, 2, 3]} spacing="40px">
      <Feature
        title="Style props"
        description="React Native Ficus UI allows you to pass all the style properties as component props. You don't need to create huge StyleSheet objects"
        featureIcon={LuComponent}
      />
      <Feature
        title="Theme support"
        description="You can edit the components sizes, colors, borders, ... with your own theme."
        featureIcon={LuPalette}
      />
      <Feature
        title="Chakra UI for React Native"
        description="React Native Ficus UI provides the support of style props on React Native components and some components implemented as from Chakra UI (with same API)."
        images={
          <HStack spacing={0}>
            <Image
              src="/ficus-logo.svg"
              width={25}
              height={15}
              alt="Ficus UI logo"
            />
            <Box w={1} />
            <Text>❤️</Text>
            <Box w={2} />
            <Image
              src="/img/chakra.png"
              width={100}
              height={50}
              alt="Chakra UI logo"
            />
          </HStack>
        }
      />
    </SimpleGrid>
  </GraySection>
);
