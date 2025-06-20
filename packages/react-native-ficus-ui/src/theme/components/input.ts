import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  borderRadius: 'md',
  alignSelf: 'flex-start',
  fontWeight: 'bold',
  px: 'lg',
  py: 'lg',
  fontSize: 'md',
  bg: 'white',
  color: 'gray.800',
  shadow: 0,
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
    height: 24,
    px: 'sm',
    py: 0,
    fontSize: 'xs',
    _focused: {
      px: 5,
      py: 0,
    },
  }),
  sm: defineStyle({
    height: 32,
    px: 'md',
    py: 'md',
    fontSize: 'sm',
    _focused: {
      px: 7,
      py: 7,
    },
  }),
  md: defineStyle({
    height: 40,
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
    _focused: {
      px: 11,
      py: 11,
    },
  }),
  lg: defineStyle({
    height: 48,
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
