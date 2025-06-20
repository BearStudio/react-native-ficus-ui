import { defineStyle, defineStyleConfig } from '../../style-system';

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
    _dark: {
      bg: `${c}.800`,
      color: `${c}.200`,
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    color: `${c}.500`,
    borderWidth: 1,
    borderColor: `${c}.500`,

    _dark: {
      color: 'white',
      borderColor: 'white',
    },
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
