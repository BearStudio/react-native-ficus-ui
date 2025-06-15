import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({});

export const checkboxGroupTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
});
