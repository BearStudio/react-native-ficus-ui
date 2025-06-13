import { getColor, useTheme } from '../../theme';
import { type NativeFicusProps, ficus, forwardRef } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

export const BaseSpinner = ficus('ActivityIndicator', {
  excludedProps: ['color'],
});

// TODO: Add to theme for default style ?
export const Spinner = forwardRef<SpinnerProps, 'ActivityIndicator'>(
  (props, ref) => {
    const { color = 'black', ...rest } = props;

    const { theme } = useTheme();

    const resolvedColor = getColor(color, theme.colors);

    return <BaseSpinner ref={ref} {...rest} color={resolvedColor} />;
  }
);
