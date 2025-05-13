import { defineStyle, defineStyleConfig } from '@ficus-ui/style-system';

const baseStyle = defineStyle({
  backgroundColor: 'white',
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
  backgroundColor: 'white',
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
