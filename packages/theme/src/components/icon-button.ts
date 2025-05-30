import {
  defineStyle,
  defineStyleConfig,
} from 'react-native-ficus-ui/style-system';

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
      _pressed: {
        bg: 'gray.100',
      },
    };
  }

  return {
    color: `${c}.600`,
    bg: 'transparent',
    _pressed: {
      bg: `${c}.50`,
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
    _pressed: {
      bg: pressedBg,
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
    fontSize: 12,
    height: 25,
    width: 25,
  }),
  sm: defineStyle({
    fontSize: 13,
    height: 30,
    width: 30,
  }),
  md: defineStyle({
    fontSize: 15,
    height: 35,
    width: 35,
  }),
  lg: defineStyle({
    fontSize: 17,
    height: 40,
    width: 40,
  }),
  xl: defineStyle({
    fontSize: 19,
    height: 45,
    width: 45,
  }),
  '2xl': defineStyle({
    fontSize: 21,
    height: 47,
    width: 47,
  }),
};

export const iconButtonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'gray',
  },
});
