import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({});

export const radioGroupTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
});
