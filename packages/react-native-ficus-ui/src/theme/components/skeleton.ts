import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  borderRadius: 'md',
  h: 20,
  w: '100%',
});

const variants = {
  subtle: defineStyle((props) => {
    return {
      bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
    };
  }),
  solid: defineStyle((props) => {
    return {
      bg: props.colorMode === 'dark' ? 'gray.500' : 'gray.400',
    };
  }),
};

const sizes = {
  xs: defineStyle({
    h: 12,
  }),
  sm: defineStyle({
    h: 16,
  }),
  md: defineStyle({
    h: 20,
  }),
  lg: defineStyle({
    h: 24,
  }),
  xl: defineStyle({
    h: 28,
  }),
};

export const Skeleton = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'subtle',
    size: 'md',
  },
});
