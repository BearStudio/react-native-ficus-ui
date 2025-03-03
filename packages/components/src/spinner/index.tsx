// import { ActivityIndicator } from 'react-native';
import { type NativeFicusProps, ficus } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

export const Spinner = ficus('ActivityIndicator', {
  exceptionProps: ['color'],
});
