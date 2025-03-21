import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@ficus-ui/style-system';

const checkboxParts = ['control', 'icon', 'label', 'container'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxParts);

const baseStyleLabel = defineStyle({
  bg: 'green.400',
  borderRadius: '100%',
  borderWidth: 2,
  borderColor: 'white',
  borderStyle: 'solid',
});
const baseStyleControl = defineStyle({
  bg: 'green.400',
  borderRadius: '100%',
  borderWidth: 2,
  borderColor: 'white',
  borderStyle: 'solid',
});

const baseStyleIcon = defineStyle({
  bg: 'green.400',
  borderRadius: '100%',
  borderWidth: 2,
  borderColor: 'white',
  borderStyle: 'solid',
});

const baseStyleContainer = defineStyle(() => {
  return {
    bg: 'blue',
    borderColor: 'white',
    verticalAlign: 'center',
    width: 30,
    height: 30,
  };
});

const baseStyle = definePartsStyle(() => {
  return {
    control: baseStyleControl,
    icon: baseStyleIcon,
    label: baseStyleLabel,
    container: baseStyleContainer(),
  };
});
const CHECKBOX_CONTROL_RATIO = 3;

function getSize(size: number) {
  return definePartsStyle({
    container: {
      width: size,
      height: size,
    },
    icon: {
      width: size,
      height: size,
      fontSize: size / 4,
    },
    label: {
      fontSize: size / 3,
    },
    control: {
      width: size / CHECKBOX_CONTROL_RATIO,
      height: size / CHECKBOX_CONTROL_RATIO,
      top: size - size / CHECKBOX_CONTROL_RATIO,
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

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
});
