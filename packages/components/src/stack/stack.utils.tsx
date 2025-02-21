import { mapResponsive } from '@chakra-ui/utils';
import { ResponsiveValue, SystemProps } from '@ficus-ui/style-system';

export type StackDirection = ResponsiveValue<
  'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined
>;

interface Options {
  spacing: SystemProps['m'];
  direction: StackDirection;
}

export function getDividerStyles(options: Options) {
  const { spacing, direction } = options;

  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: 1,
    },
    'column-reverse': {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: 1,
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: 1,
      borderBottomWidth: 0,
    },
    'row-reverse': {
      mx: spacing,
      my: 0,
      borderLeftWidth: 1,
      borderBottomWidth: 0,
    },
  };

  return {
    '&': mapResponsive(
      direction,
      (value: keyof typeof dividerStyles) => dividerStyles[value]
    ),
  };
}
