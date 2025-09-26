import { InputProps } from '../../components';
import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle<InputProps>({
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

const variantOutline = defineStyle({
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
});

const variants = {
  outline: variantOutline,
};

const sizes = {
  xs: defineStyle({
    h: 24,
    px: 'sm',
    py: 0,
    fontSize: 'xs',
    _focused: {
      px: 5,
      py: 0,
    },
  }),
  sm: defineStyle({
    h: 32,
    px: 'md',
    py: 'md',
    fontSize: 'sm',
    _focused: {
      px: 7,
      py: 7,
    },
  }),
  md: defineStyle({
    h: 40,
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
    _focused: {
      px: 11,
      py: 11,
    },
  }),
  lg: defineStyle({
    h: 48,
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
    _focused: {
      px: 11,
      py: 11,
    },
  }),
};

export const inputTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
