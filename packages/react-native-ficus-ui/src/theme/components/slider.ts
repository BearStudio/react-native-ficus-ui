import { createMultiStyleConfigHelpers, defineStyle } from '../../style-system';

const sliderParts = ['container', 'track', 'thumb', 'filledTrack'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderParts);

const baseContainerStyle = defineStyle({});

const baseTrackStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.500`,
    _dark: {
      bg: `${c}.200`,
    },
  };
});

const baseFilledTrackStyle = defineStyle({
  bg: 'gray.100',
  _dark: {
    bg: 'gray.600',
  },
});

const baseThumbStyle = defineStyle({
  bg: 'white',
});

const baseStyle = definePartsStyle((props) => ({
  container: baseContainerStyle,
  track: baseTrackStyle(props),
  thumb: baseThumbStyle,
  filledTrack: baseFilledTrackStyle,
}));

// TODO
const sizes = {
  sm: {},
  md: {},
  lg: {},
};

export const sliderTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'gray',
  },
});
