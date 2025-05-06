import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@ficus-ui/style-system';

const sliderParts = ['container', 'thumb', 'track'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderParts);

const baseContainerStyle = defineStyle({});

const baseTrackStyle = defineStyle((props) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 'full',
  isDisabled: false,
  bg: 'gray.400',
  _checked: {
    bg: `${props.colorScheme}.500`,
  },
}));

const baseThumbStyle = defineStyle({
  borderRadius: 'full',
  w: 24,
  h: 24,
  bg: 'white',
  _checked: {
    bg: 'white',
  },
});

const baseStyle = definePartsStyle((props) => ({
  container: baseContainerStyle,
  track: baseTrackStyle(props),
  thumb: baseThumbStyle,
}));

const sizes = {
  xs: defineStyle({
    track: {
      h: 20,
      w: 36,
      p: 2,
    },
    thumb: {
      w: 16,
      h: 16,
    },
  }),
  sm: defineStyle({
    track: {
      h: 24,
      w: 40,
      p: 2,
    },
    thumb: {
      w: 20,
      h: 20,
    },
  }),
  md: defineStyle({
    track: {
      h: 30,
      w: 55,
      p: 2,
    },
    thumb: {
      w: 26,
      h: 26,
    },
  }),
  lg: defineStyle({
    track: {
      h: 36,
      w: 70,
      p: 2,
    },
    thumb: {
      w: 32,
      h: 32,
    },
  }),
};

export const switchTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'green',
  },
});
