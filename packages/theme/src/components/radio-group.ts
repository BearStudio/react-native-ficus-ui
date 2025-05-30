import {
  defineStyle,
  defineStyleConfig,
} from 'react-native-ficus-ui/style-system';

const baseStyle = defineStyle({});

export const radioGroupTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
});
