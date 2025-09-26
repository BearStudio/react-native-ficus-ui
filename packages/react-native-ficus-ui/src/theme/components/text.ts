import { TextProps } from '../../components';
import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle<TextProps>({
  _dark: {
    color: 'white',
  },
});

export const textTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
