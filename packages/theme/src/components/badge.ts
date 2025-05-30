import {
  defineStyle,
  defineStyleConfig,
} from 'react-native-ficus-ui/style-system';

const baseStyle = defineStyle({
  px: 4,
  py: 2,
  textTransform: 'uppercase',
  fontSize: 'xs',
  borderRadius: 'sm',
  fontWeight: 'bold',
  alignSelf: 'flex-start',
});

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.500`,
    color: 'white',
  };
});

const variantSubtle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.100`,
    color: `${c}.800`,
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    color: `${c}.500`,
    boxShadow: '0 0 0 1 rgba(0, 0, 0, 0.5)',
  };
});

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const sizes = {
  xs: defineStyle({
    fontSize: 12,
  }),
  sm: defineStyle({
    fontSize: 13,
  }),
  md: defineStyle({
    fontSize: 15,
  }),
  lg: defineStyle({
    fontSize: 17,
  }),
  xl: defineStyle({
    fontSize: 19,
  }),
  '2xl': defineStyle({
    fontSize: 21,
  }),
};

export const badgeTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
    size: 'md',
  },
});
