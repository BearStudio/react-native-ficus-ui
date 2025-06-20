import { createMultiStyleConfigHelpers, defineStyle } from '../../style-system';

const sliderParts = ['container', 'control', 'label', 'icon'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(sliderParts);

const baseContainerStyle = defineStyle({
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-start',
});

const baseControlStyle = defineStyle((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'white',
  borderRadius: 'sm',
  borderColor: 'gray.200',
  borderWidth: 2,
  _dark: {
    bg: 'gray.900',
    borderColor: 'gray.600',
  },
  _checked: {
    borderWidth: 0,
    bg: `${props.colorScheme}.500`,
    _dark: {
      bg: `${props.colorScheme}.300`,
    },
  },
  _disabled: {
    opacity: 0.5,
  },
}));

const baseLabelStyle = defineStyle({
  color: 'gray.700',
  _dark: {
    color: 'white',
  },
  _disabled: {
    opacity: 0.5,
  },
});

const baseIconStyle = defineStyle({
  color: 'white',
  _checked: {
    _dark: {
      color: 'gray.800',
    },
  },
});

const baseStyle = definePartsStyle((props) => ({
  container: baseContainerStyle,
  control: baseControlStyle(props),
  label: baseLabelStyle,
  icon: baseIconStyle,
}));

const sizes = {
  xs: defineStyle({
    control: {
      w: 16,
      h: 16,
    },
    icon: {
      size: 'md',
    },
    label: {
      ml: 'sm',
      fontSize: 'md',
    },
  }),
  sm: defineStyle({
    control: {
      w: 18,
      h: 18,
    },
    icon: {
      size: 'lg',
    },
    label: {
      ml: 'sm',
      fontSize: 'lg',
    },
  }),
  md: defineStyle({
    control: {
      w: 24,
      h: 24,
    },
    icon: {
      size: 'xl',
    },
    label: {
      ml: 'sm',
      fontSize: 'xl',
    },
  }),
  lg: defineStyle({
    control: {
      w: 32,
      h: 32,
    },
    icon: {
      size: '2xl',
    },
    label: {
      ml: 'sm',
      fontSize: '4xl',
    },
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'blue',
  },
});
