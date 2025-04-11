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

export const inputTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});
