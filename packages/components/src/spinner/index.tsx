import { ActivityIndicator } from 'react-native';

import { type NativeFicusProps, ficus } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

export const Spinner = ficus('ActivityIndicator'); // something wrong with ficus making color return undefined but size still working correctly
// color return undefined can be check in spinner.spec.tsx
export const Spinner2 = (props: SpinnerProps) => {
  return <ActivityIndicator {...props} />; // using normal ActivityIndicator instead of ficus until found out why color isnt working
};
