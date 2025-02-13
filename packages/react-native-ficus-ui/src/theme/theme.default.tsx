import { Box } from '../components/box/box.component';
import type { ThemeType } from './type';
import React from 'react';
import { Text } from '../components/text/text.component';

export const defaultTheme: ThemeType = {
  name: 'default',

  colors: {
    transparent: 'rgba(0,0,0,0)',
    black: '#000000',
    white: '#FFFFFF',

    whiteAlpha: {
      50: 'rgba(255, 255, 255, 0.04)',
      100: 'rgba(255, 255, 255, 0.06)',
      200: 'rgba(255, 255, 255, 0.08)',
      300: 'rgba(255, 255, 255, 0.16)',
      400: 'rgba(255, 255, 255, 0.24)',
      500: 'rgba(255, 255, 255, 0.36)',
      600: 'rgba(255, 255, 255, 0.48)',
      700: 'rgba(255, 255, 255, 0.64)',
      800: 'rgba(255, 255, 255, 0.80)',
      900: 'rgba(255, 255, 255, 0.92)',
    },

    blackAlpha: {
      50: 'rgba(0, 0, 0, 0.04)',
      100: 'rgba(0, 0, 0, 0.06)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.16)',
      400: 'rgba(0, 0, 0, 0.24)',
      500: 'rgba(0, 0, 0, 0.36)',
      600: 'rgba(0, 0, 0, 0.48)',
      700: 'rgba(0, 0, 0, 0.64)',
      800: 'rgba(0, 0, 0, 0.80)',
      900: 'rgba(0, 0, 0, 0.92)',
    },

    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },

    red: {
      50: '#FFF5F5',
      100: '#FED7D7',
      200: '#FEB2B2',
      300: '#FC8181',
      400: '#F56565',
      500: '#E53E3E',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
    },

    orange: {
      50: '#FFFAF0',
      100: '#FEEBC8',
      200: '#FBD38D',
      300: '#F6AD55',
      400: '#ED8936',
      500: '#DD6B20',
      600: '#C05621',
      700: '#9C4221',
      800: '#7B341E',
      900: '#652B19',
    },

    yellow: {
      50: '#FFFFF0',
      100: '#FEFCBF',
      200: '#FAF089',
      300: '#F6E05E',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
      700: '#975A16',
      800: '#744210',
      900: '#5F370E',
    },

    green: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },

    teal: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },

    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },

    cyan: {
      50: '#EDFDFD',
      100: '#C4F1F9',
      200: '#9DECF9',
      300: '#76E4F7',
      400: '#0BC5EA',
      500: '#00B5D8',
      600: '#00A3C4',
      700: '#0987A0',
      800: '#086F83',
      900: '#065666',
    },

    purple: {
      50: '#FAF5FF',
      100: '#E9D8FD',
      200: '#D6BCFA',
      300: '#B794F4',
      400: '#9F7AEA',
      500: '#805AD5',
      600: '#6B46C1',
      700: '#553C9A',
      800: '#44337A',
      900: '#322659',
    },

    pink: {
      50: '#FFF5F7',
      100: '#FED7E2',
      200: '#FBB6CE',
      300: '#F687B3',
      400: '#ED64A6',
      500: '#D53F8C',
      600: '#B83280',
      700: '#97266D',
      800: '#702459',
      900: '#521B41',
    },

    linkedin: {
      50: '#E8F4F9',
      100: '#CFEDFB',
      200: '#9BDAF3',
      300: '#68C7EC',
      400: '#34B3E4',
      500: '#00A0DC',
      600: '#008CC9',
      700: '#0077B5',
      800: '#005E93',
      900: '#004471',
    },

    facebook: {
      50: '#E8F4F9',
      100: '#D9DEE9',
      200: '#B7C2DA',
      300: '#6482C0',
      400: '#4267B2',
      500: '#385898',
      600: '#314E89',
      700: '#29487D',
      800: '#223B67',
      900: '#1E355B',
    },

    messenger: {
      50: '#D0E6FF',
      100: '#B9DAFF',
      200: '#A2CDFF',
      300: '#7AB8FF',
      400: '#2E90FF',
      500: '#0078FF',
      600: '#0063D1',
      700: '#0052AC',
      800: '#003C7E',
      900: '#002C5C',
    },

    whatsapp: {
      50: '#dffeec',
      100: '#b9f5d0',
      200: '#90edb3',
      300: '#65e495',
      400: '#3cdd78',
      500: '#22c35e',
      600: '#179848',
      700: '#0c6c33',
      800: '#01421c',
      900: '#001803',
    },

    twitter: {
      50: '#E5F4FD',
      100: '#C8E9FB',
      200: '#A8DCFA',
      300: '#83CDF7',
      400: '#57BBF5',
      500: '#1DA1F2',
      600: '#1A94DA',
      700: '#1681BF',
      800: '#136B9E',
      900: '#0D4D71',
    },

    telegram: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },

  fontSize: {
    'xs': 11,
    'sm': 12,
    'md': 13,
    'lg': 15,
    'xl': 17,
    '2xl': 19,
    '3xl': 21,
    '4xl': 24,
    '5xl': 27,
    '6xl': 32,
  },

  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  },

  shadowColor: '#000',

  shadow: {
    'none': {},
    'xs': {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    'sm': {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    'md': {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
    'lg': {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
    },
    'xl': {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
    },
    '2xl': {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
  },

  borderRadius: {
    'none': 0,
    'xs': 2,
    'sm': 4,
    'md': 6,
    'lg': 8,
    'xl': 12,
    '2xl': 16,
    'full': 99999,
  },

  spacing: {
    'none': 0,
    'xs': 4,
    'sm': 6,
    'md': 8,
    'lg': 12,
    'xl': 24,
    '2xl': 32,
    '3xl': 64,
    '-xs': -4,
    '-sm': -6,
    '-md': -8,
    '-lg': -12,
    '-xl': -24,
    '-2xl': -32,
    '-3xl': -64,
  },

  stackSpacing: {
    'none': 0,
    'xs': 4,
    'sm': 6,
    'md': 8,
    'lg': 12,
    'xl': 24,
    '2xl': 32,
    '3xl': 64,
    '-xs': -4,
    '-sm': -6,
    '-md': -8,
    '-lg': -12,
    '-xl': -24,
    '-2xl': -32,
    '-3xl': -64,
  },

  avatar: {
    'xs': 20,
    'sm': 30,
    'md': 50,
    'lg': 70,
    'xl': 90,
    '2xl': 110,
  },

  button: {
    'xs': {
      paddingHorizontal: 8,
      fontSize: 12,
      height: 25,
    },
    'sm': {
      paddingHorizontal: 12,
      fontSize: 13,
      height: 30,
    },
    'md': {
      paddingHorizontal: 15,
      fontSize: 15,
      height: 42,
    },
    'lg': {
      paddingHorizontal: 20,
      fontSize: 17,
      height: 50,
    },
    'xl': {
      paddingHorizontal: 25,
      fontSize: 19,
      height: 60,
    },
    '2xl': {
      paddingHorizontal: 30,
      fontSize: 21,
      height: 70,
    },
  },

  spinner: {
    sm: 'small',
    lg: 'large',
  },

  checkbox: {
    sm: 26,
    lg: 36,
  },

  radio: {
    sm: 26,
    lg: 36,
  },

  toastProps: {
    position: 'bottom',
    config: {
      success: ({ text1, text2 }) => (
        <Box bg="green.500" p="lg" borderRadius="lg">
          <Text color="white" fontWeight="bold" fontSize="lg">
            {text1}
          </Text>
          <Text color="white">{text2}</Text>
        </Box>
      ),
      error: ({ text1, text2 }) => (
        <Box bg="red.500" p="lg" borderRadius="lg">
          <Text color="white" fontWeight="bold" fontSize="lg">
            {text1}
          </Text>
          <Text color="white">{text2}</Text>
        </Box>
      ),
      warning: ({ text1, text2 }) => (
        <Box bg="orange.500" p="lg" borderRadius="lg">
          <Text color="white" fontWeight="bold" fontSize="lg">
            {text1}
          </Text>
          <Text color="white">{text2}</Text>
        </Box>
      ),
      info: ({ text1, text2 }) => (
        <Box bg="blue.500" p="lg" borderRadius="lg">
          <Text color="white" fontWeight="bold" fontSize="lg">
            {text1}
          </Text>
          <Text color="white">{text2}</Text>
        </Box>
      ),
    },
  },

  components: {
    Badge: {
      variants: {
        subtle: {},
        solid: {},
        outline: {},
      },
    },
    Button: {
      variants: {
        solid: {},
        outline: {},
        ghost: {},
        link: {},
      },
    },
  },
};
