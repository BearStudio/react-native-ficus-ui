import { createMultiStyleConfigHelpers, defineStyle } from '../../style-system';

const sliderParts = ['container', 'track', 'thumb', 'filledTrack'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderParts);

const baseContainerStyle = defineStyle({});

const baseTrackStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    bg: `${c}.500`,
  };
});

const baseFilledTrackStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === 'gray') {
    return {
      bg: `${c}.200`,
    };
  }
  return {
    bg: `${c}.100`,
  };
});

const baseThumbStyle = defineStyle({
  bg: 'white',
});

const baseStyle = definePartsStyle((props) => ({
  container: baseContainerStyle,
  track: baseTrackStyle(props),
  thumb: baseThumbStyle,
  filledTrack: baseFilledTrackStyle(props),
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
