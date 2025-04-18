import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

const baseStyle = defineStyle({
  alignSelf: 'flex-start',
  justifyContent: 'flex-start',
});

const variantOutline = defineStyle(() => {
  return {};
});

const variants = {
  outline: variantOutline,
};

export const pinInputTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});

const fieldBaseStyle = defineStyle({
  borderRadius: 'md',
  alignSelf: 'flex-start',
  fontWeight: 'bold',
  fontSize: 'md',
  bg: 'white',
  color: 'gray.800',
  shadow: 0,
  mr: 'sm',
  justifyContent: 'center',
  alignItems: 'center',
  _disabled: {
    opacity: 0.6,
  },
});

const fieldVariantOutline = defineStyle(() => {
  return {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray.400',
    colorScheme: 'blue',
    _focused: {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'blue.500',
    },
  };
});

const fieldVariants = {
  outline: fieldVariantOutline,
};

const sizes = {
  xs: defineStyle({
    width: 24,
    height: 24,
  }),
  sm: defineStyle({
    width: 32,
    height: 32,
  }),
  md: defineStyle({
    width: 40,
    height: 40,
  }),
  lg: defineStyle({
    width: 48,
    height: 48,
  }),
};

export const pinInputFieldTheme = defineStyleConfig({
  baseStyle: fieldBaseStyle,
  variants: fieldVariants,
  sizes,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
});
