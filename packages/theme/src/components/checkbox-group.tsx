import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

const baseStyle = defineStyle({});

export const checkboxGroupTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
});
