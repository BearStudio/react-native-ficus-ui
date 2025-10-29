import { defineStyle, defineStyleConfig } from '../../style-system';

const baseStyle = defineStyle({
  borderRadius: 'md',
  h: 'lg',
  w: '100%',
});

const variants = {
  pulse: defineStyle((props) => {
    const { colorScheme = 'gray', colorMode } = props;
    return {
      bg: colorMode === 'dark' ? `${colorScheme}.600` : `${colorScheme}.200`,
      opacity: 1,
    };
  }),
  shine: defineStyle((props) => {
    const { colorScheme = 'gray', colorMode } = props;
    return {
      bg: colorMode === 'dark' ? `${colorScheme}.600` : `${colorScheme}.200`,
      opacity: 1,
    };
  }),
  none: defineStyle((props) => {
    const { colorScheme = 'gray', colorMode } = props;
    return {
      bg: colorMode === 'dark' ? `${colorScheme}.600` : `${colorScheme}.200`,
      opacity: 1,
    };
  }),
};

export const Skeleton = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'pulse',
    colorScheme: 'gray',
  },
});
