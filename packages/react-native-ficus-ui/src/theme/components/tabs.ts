import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  bg: 'white',
  _dark: {
    bg: 'gray.700',
  },
});

const variantDefault = defineStyle({});

const variants = {
  default: variantDefault,
};

export const tabsTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'default',
  },
});

const baseTabListStyle = defineStyle({
  bg: 'white',
  _dark: {
    bg: 'gray.700',
  },
});

const variantTabListDefault = defineStyle({});

const variantsTabList = {
  default: variantTabListDefault,
};

export const tabListTheme = defineStyleConfig({
  baseStyle: baseTabListStyle,
  variants: variantsTabList,
  defaultProps: {
    variant: 'default',
  },
});
