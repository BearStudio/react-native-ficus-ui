import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

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
    },
  };
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
  }),
  sm: defineStyle({
    height: 32,
    px: 'md',
    py: 'md',
    fontSize: 'sm',
  }),
  md: defineStyle({
    height: 40,
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
  }),
  lg: defineStyle({
    height: 48,
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
  }),
};

export const inputTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'outline',
  },
});
