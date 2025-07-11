import {
  BaseToastProps,
  ToastPosition,
  ToastProps,
} from 'react-native-toast-message';

import { Box, Text } from '../components';
import { Dict } from '../style-system';
import { components } from './components';
import { foundations } from './foundations';

export interface ThemeToastProps extends BaseToastProps, ToastProps {
  props?: Dict;
}

export const theme = {
  components,
  ...foundations,

  toastProps: {
    position: 'bottom' as ToastPosition,
    config: {
      success: ({ text1, text2 }: BaseToastProps) => (
        <Box
          bg="green.500"
          _dark={{ bg: 'green.300' }}
          p="lg"
          borderRadius="lg"
        >
          <Text
            color="white"
            _dark={{ color: 'gray.800' }}
            fontWeight="bold"
            fontSize="lg"
          >
            {text1}
          </Text>
          <Text color="white" _dark={{ color: 'gray.800' }}>
            {text2}
          </Text>
        </Box>
      ),
      error: ({ text1, text2 }: BaseToastProps) => (
        <Box bg="red.500" _dark={{ bg: 'red.300' }} p="lg" borderRadius="lg">
          <Text
            color="white"
            _dark={{ color: 'gray.800' }}
            fontWeight="bold"
            fontSize="lg"
          >
            {text1}
          </Text>
          <Text color="white" _dark={{ color: 'gray.800' }}>
            {text2}
          </Text>
        </Box>
      ),
      warning: ({ text1, text2 }: BaseToastProps) => (
        <Box
          bg="orange.500"
          _dark={{ bg: 'orange.300' }}
          p="lg"
          borderRadius="lg"
        >
          <Text
            color="white"
            _dark={{ color: 'gray.800' }}
            fontWeight="bold"
            fontSize="lg"
          >
            {text1}
          </Text>
          <Text color="white" _dark={{ color: 'gray.800' }}>
            {text2}
          </Text>
        </Box>
      ),
      info: ({ text1, text2 }: BaseToastProps) => (
        <Box bg="blue.500" _dark={{ bg: 'blue.300' }} p="lg" borderRadius="lg">
          <Text
            color="white"
            _dark={{ color: 'gray.800' }}
            fontWeight="bold"
            fontSize="lg"
          >
            {text1}
          </Text>
          <Text color="white" _dark={{ color: 'gray.800' }}>
            {text2}
          </Text>
        </Box>
      ),
    },
  },
};

export type Theme = typeof theme;
