import { TextareaProps } from '../../components/input/textarea';
import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle<TextareaProps>({
  borderRadius: 'md',
  alignSelf: 'flex-start',
  fontWeight: 'bold',
  px: 'lg',
  py: 'lg',
  fontSize: 'md',
  bg: 'white',
  color: 'gray.800',
  shadow: 'none',
  _disabled: {
    opacity: 0.6,
  },
  _dark: {
    bg: 'gray.900',
    color: 'white',
  },
});

const variantOutline = defineStyle(() => {
  return {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray.400',
    _focused: {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'blue.500',
      _dark: {
        borderColor: 'blue.300',
      },
    },
    _dark: {
      borderColor: 'gray.600',
    },
  };
});

const variants = {
  outline: variantOutline,
};

export const textareaTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});
