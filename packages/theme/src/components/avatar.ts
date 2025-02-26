import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

const baseStyle = defineStyle({
  w:50,
  h:50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
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

export const avatarTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'gray',
  },
});
