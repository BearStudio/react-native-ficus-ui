import { TextProps } from '../../components';
import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle<TextProps>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const centerTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
