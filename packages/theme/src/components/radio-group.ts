import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

const baseStyle = defineStyle({});

export const radioGroupTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
});
