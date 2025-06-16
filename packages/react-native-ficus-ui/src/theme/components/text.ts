import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  color: 'red',
});

export const textTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
