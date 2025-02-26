import { ActivityIndicator } from 'react-native';

import { type NativeFicusProps } from '../system';

export interface SpinnerProps extends NativeFicusProps<'ActivityIndicator'> {}

// export const Spinner = ficus('ActivityIndicator'); // something wrong with ficus making color return undefined but size still working correctly

export const Spinner = (props: SpinnerProps) => {
  return <ActivityIndicator {...props} />; // using normal ActivityIndicator instead of ficus until found out why color isnt working
};
