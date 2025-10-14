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

export const Skeleton = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'subtle',
  },
});
