import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

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

export const badgeTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
});
