import { AvatarBadgeProps } from '../../components/avatar/avatar-badge';
import { createMultiStyleConfigHelpers, defineStyle } from '../../style-system';
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

const baseStyleBagde = defineStyle<AvatarBadgeProps>({
  bg: 'green.400',
  borderRadius: '100%',
  borderWidth: 2,
  borderColor: 'white',
  borderStyle: 'solid',
});

const baseStyleExcessLabel = defineStyle({
  bg: 'gray.300',
  fontSize: 'sm',
  w: 30,
  h: 30,
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
    w: 30,
    h: 30,
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
      w: size,
      h: size,
    },
    excessLabel: {
      w: size,
      h: size,
      fontSize: size / 4,
    },
    label: {
      fontSize: size / 3,
    },
    badge: {
      w: size / AVATAR_BADGE_RATIO,
      h: size / AVATAR_BADGE_RATIO,
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
