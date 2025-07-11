import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  _dark: {
    color: 'white',
  },
});

export const textTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
