import { defineStyle, defineStyleConfig } from '../../style-system';
import { runIfFn } from '../utils/run-if-fn';

const baseStyle = defineStyle({
  borderRadius: 'md',
  alignSelf: 'flex-start',
  fontWeight: 'bold',
  _disabled: {
    opacity: 0.6,
  },
});

const variantGhost = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      color: 'gray.800',
      _dark: {
        color: 'white',
      },
      _pressed: {
        bg: 'gray.100',
        _dark: {
          bg: 'gray.800',
        },
      },
    };
  }

  return {
    color: `${c}.500`,
    bg: 'transparent',
    _dark: {
      color: `${c}.300`,
      borderColor: `${c}.300`,
    },
    _pressed: {
      bg: `${c}.50`,
      _dark: {
        bg: `${c}.900`,
      },
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: `${c}.500`,
    ...runIfFn(variantGhost, props),
  };
});

type AccessibleColor = {
  bg?: string;
  color?: string;
  pressedBg?: string;
  loaderColor?: string;
};

/** Accessible color overrides for less accessible colors. */
const accessibleColorMap: { [key: string]: AccessibleColor } = {
  yellow: {
    bg: 'yellow.400',
    color: 'black',
    pressedBg: 'yellow.500',
    loaderColor: 'black',
  },
  cyan: {
    bg: 'cyan.400',
    color: 'black',
    pressedBg: 'cyan.500',
    loaderColor: 'black',
  },
};

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  const {
    bg = `${c}.500`,
    color = 'white',
    pressedBg = `${c}.600`,
  } = accessibleColorMap[c] ?? {};

  return {
    bg,
    color,
    _dark: {
      bg: `${c}.300`,
      color: 'gray.800',
    },
    _pressed: {
      bg: pressedBg,
      _dark: {
        bg: `${c}.400`,
        color: 'gray.800',
      },
    },
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    lineHeight: 18,
    textDecorationLine: 'underline',
    textDecorationColor: `${c}.500`,
    verticalAlign: 'baseline',
    color: `${c}.500`,
    _dark: {
      color: `${c}.300`,
      textDecorationColor: `${c}.300`,
    },
  };
});

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
};

const sizes = {
  xs: defineStyle({
    px: 6,
    fontSize: 12,
    height: 25,
  }),
  sm: defineStyle({
    px: 10,
    fontSize: 13,
    height: 30,
  }),
  md: defineStyle({
    px: 14,
    fontSize: 15,
    height: 35,
  }),
  lg: defineStyle({
    px: 16,
    fontSize: 17,
    height: 40,
  }),
  xl: defineStyle({
    px: 18,
    fontSize: 19,
    height: 45,
  }),
  '2xl': defineStyle({
    px: 20,
    fontSize: 21,
    height: 47,
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'gray',
  },
});
