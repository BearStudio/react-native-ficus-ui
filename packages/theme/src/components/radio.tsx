import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@ficus-ui/style-system';

const parts = ['container', 'control', 'label'] as const;

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts);

const baseContainerStyle = defineStyle({
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'flex-start',
});

const baseControlStyle = defineStyle((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'white',
  borderRadius: 'full',
  borderColor: 'gray.200',
  _checked: {
    borderColor: `${props.colorScheme}.500`,
  },
  _disabled: {
    opacity: 0.5,
  },
}));

const baseLabelStyle = defineStyle({
  color: 'gray.700',
  _disabled: {
    opacity: 0.5,
  },
});

const baseStyle = definePartsStyle((props) => ({
  container: baseContainerStyle,
  control: baseControlStyle(props),
  label: baseLabelStyle,
}));

const sizes = {
  xs: defineStyle({
    control: {
      w: 16,
      h: 16,
      borderWidth: 2,
      _checked: {
        borderWidth: 5,
      },
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
      borderWidth: 2,
      _checked: {
        borderWidth: 6,
      },
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
      borderWidth: 2,
      _checked: {
        borderWidth: 7,
      },
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
      borderWidth: 2,
      _checked: {
        borderWidth: 10,
      },
    },
    label: {
      ml: 'sm',
      fontSize: '4xl',
    },
  }),
};

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'blue',
  },
});
