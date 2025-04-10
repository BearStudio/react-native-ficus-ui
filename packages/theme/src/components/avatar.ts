import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@ficus-ui/style-system';

import { darkenColor, lightenColor, randomColorFromString } from '../utils';

const avatarParts = [
  'label',
  'badge',
  'container',
  'excessLabel',
  'group',
] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarParts);

const baseStyleBagde = defineStyle({
  bg: 'green.400',
  borderRadius: '100%',
  borderWidth: 2,
  borderColor: 'white',
  borderStyle: 'solid',
});

const baseStyleExcessLabel = defineStyle({
  bg: 'gray.300',
  fontSize: 'sm',
  width: 30,
  height: 30,
});

const baseStyleContainer = defineStyle((props) => {
  const { name, colorScheme: c } = props;

  const bg = c
    ? `${c}.300`
    : name
      ? lightenColor(randomColorFromString(name), 30)
      : 'gray.300';
  return {
    bg,
    borderColor: 'white',
    verticalAlign: 'center',
    width: 30,
    height: 30,
  };
});

const baseStyleLabel = defineStyle((props) => {
  const { name, colorScheme: c } = props;

  const color = c
    ? `${c}.800`
    : name
      ? darkenColor(randomColorFromString(name), 40)
      : 'gray.800';

  return {
    color,
  };
});

const baseStyle = definePartsStyle((props) => {
  return {
    badge: baseStyleBagde,
    excessLabel: baseStyleExcessLabel,
    container: baseStyleContainer(props),
    label: baseStyleLabel(props),
  };
});

const AVATAR_BADGE_RATIO = 3;
function getSize(size: number) {
  return definePartsStyle({
    container: {
      width: size,
      height: size,
    },
    excessLabel: {
      width: size,
      height: size,
      fontSize: size / 4,
    },
    label: {
      fontSize: size / 3,
    },
    badge: {
      width: size / AVATAR_BADGE_RATIO,
      height: size / AVATAR_BADGE_RATIO,
      top: size - size / AVATAR_BADGE_RATIO,
      right: 0,
    },
  });
}

const sizes = {
  xs: getSize(30),
  sm: getSize(40),
  md: getSize(50),
  lg: getSize(70),
  xl: getSize(80),
};

export const avatarTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});
