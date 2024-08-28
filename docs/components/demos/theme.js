import {
  ThemeProvider,
  HStack,
  Box,
  VStack,
  Text,
} from 'react-native-ficus-ui';
import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from 'react';

export const Theme = () => {
  const { theme: nextraTheme } = useTheme();
  const [textColor, setTextColor] = useState(nextraTheme === 'dark' ? 'white' : 'black');

  useEffect(() => {
    setTextColor(nextraTheme === 'dark' ? 'white' : 'black')
  }, [nextraTheme])

  const ThemePalette = ({ color }) => (
    <HStack spacing={5}>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800].map((i) => (
        <Box
          key={`color-${color}-${i}`}
          w={{ base: 30, sm: 50 }}
          h={{ base: 30, sm: 50 }}
          borderRadius={{ base: 5, sm: 10 }}
          bg={`${color}.${i}`}
        />
      ))}
    </HStack>
  );

  const theme = {
    colors: {
      // Use Smart Swatch to generate colors palette https://smart-swatch.netlify.app
      brand: {
        50: '#ddfff3',
        100: '#b5f6e0',
        200: '#8cf0cd',
        300: '#60e8ba',
        400: '#36e2a6',
        500: '#1dc98d',
        600: '#119c6d',
        700: '#046f4d',
        800: '#00442e',
        900: '#00180e',
      },
      pink: {
        50: '#ffe4fe',
        100: '#fdb7ef',
        200: '#f788e1',
        300: '#f259d4',
        400: '#ee2cc7',
        500: '#d414ae',
        600: '#a60d88',
        700: '#770761',
        800: '#49013b',
        900: '#1d0016',
      },
      violet: {
        50: '#f0eaff',
        100: '#d1c1f4',
        200: '#b199e7',
        300: '#9171dc',
        400: '#7248d0',
        500: '#592fb7',
        600: '#45248f',
        700: '#311968',
        800: '#1e0f40',
        900: '#0c031b',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <VStack spacing={5}>
          <ThemePalette color="red" />
          <ThemePalette color="orange" />
          <ThemePalette color="brand" />
          <ThemePalette color="blue" />
          <ThemePalette color="violet" />
          <ThemePalette color="pink" />
        </VStack>

        <Box mt="xl">
          <Text fontSize="xs" color={textColor}>Example of text with font size xs</Text>
          <Text fontSize="sm" color={textColor}>Example of text with font size sm</Text>
          <Text fontSize="md" color={textColor}>Example of text with font size md</Text>
          <Text fontSize="lg" color={textColor}>Example of text with font size lg</Text>
          <Text fontSize="xl" color={textColor}>Example of text with font size xl</Text>
          <Text fontSize="2xl" color={textColor}>Example of text with font size 2xl</Text>
          <Text fontSize="3xl" color={textColor}>Example of text with font size 3xl</Text>
          <Text fontSize="4xl" color={textColor}>Example of text with font size 4xl</Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
