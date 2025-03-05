import { getColor, useTheme } from '@ficus-ui/theme';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

export const BaseSpinner = ficus('ActivityIndicator', {
  excludedProps: ['color'],
});

export const Spinner = forwardRef<SpinnerProps, 'Image'>((props, ref) => {
  const { color = 'black', ...rest } = props;

  const { theme } = useTheme();

  const resolvedColor = getColor(color, theme.colors);

  return <BaseSpinner ref={ref} {...rest} color={resolvedColor} />;
});
